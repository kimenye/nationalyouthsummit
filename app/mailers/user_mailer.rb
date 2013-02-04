class UserMailer < ActionMailer::Base
  default :from => "notifications@example.com"

  def send_csv(csv_string)

    attachments['users.csv'] = csv_string

    mail(:to => ENV['TO_EMAIL'], :subject => "Today's Registered Users")

  end
end
