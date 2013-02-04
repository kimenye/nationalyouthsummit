class UserMailer < ActionMailer::Base
  default :from => ENV["FROM_EMAIL"]

  def send_csv(csv_string)

    attachments['users.csv'] = csv_string

    mail(:to => ENV['TO_EMAIL'], :subject => "Today's Registered Users")

  end
end
