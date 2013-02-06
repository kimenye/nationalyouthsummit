class RegistrationController < ApplicationController
  before_filter :authenticate

  def get_user_list

    @participants = Participant.where("updated_at >= ?", _get_start_of_day)

    if(@participants.size > 0)

      csv_string = CSV.generate do |csv|
        csv << ["Name", "Email", "Phone number"]
        @participants.each do |participant|
          csv << [participant.name, participant.email, participant.phone_number]
        end
      end

      send_data csv_string,
                :type => 'text/csv; charset=iso-8859-1; header=present',
                :disposition => "attachment; filename=users.csv"

    else
      render :nothing => true
    end

  end

  def _get_start_of_day
    Time.local(Time.now.year, Time.now.month, Time.now.day, 0, 0, 0)
  end

  protected

  def authenticate
    authenticate_or_request_with_http_basic do |username, password|
      username == "foo" && password == "bar"
    end
  end

end
