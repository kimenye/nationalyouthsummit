require 'rubygems'
require 'rufus/scheduler'

scheduler = Rufus::Scheduler.start_new

#scheduler.every '50s' do
#  export_to_csv
#end

# every day of the week at 23:55:00
scheduler.cron '0 55 23 * * 1-5' do
  #export_to_csv
end

def export_to_csv

  @participants = Participant.where("updated_at >= ?", _get_start_of_day)

  if(@participants.size > 0)

    csv_string = CSV.generate do |csv|
      csv << ["Name", "Email", "Phone number"]
      @participants.each do |participant|
        csv << [participant.name, participant.email, participant.phone_number]
      end
    end

    UserMailer.send_csv(csv_string).deliver

  end

end

def _get_start_of_day
  Time.local(Time.now.year, Time.now.month, Time.now.day, 0, 0, 0)
end