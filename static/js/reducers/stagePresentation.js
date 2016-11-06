const MS_PER_DAY = 1000 * 60 * 60 * 24;

export const stage_type_to_icon = {
  PHONE: "phone",
  ONSITE: "flight_takeoff",
  ONLINE: "mail_outline",
  RECRUITER: "person",
  CHALLENGE: "assignment_returned",
  OFFER: "sentiment_very_satisfied",
  REJECTION: "sentiment_very_dissatisfied"
}

export const getStageTitle = (stage) => {
  switch (stage.type) {
    case 'PHONE':
      let suffix = stage.interviewer == "" ? "" : `with ${stage.interviewer}`
      return `Phone interview ${suffix}`
    case 'ONSITE':
      return "Onsite Interview"
    case 'ONLINE':
      return "Applied online"
    case 'RECRUITER':
      return 'Contacted by recruiter'
    default:
      throw "Unknown stage type!"
  }
}

export const getStageSubtitle = (stage) => (stage.type == 'RECRUITER' ?
  `on ${stage.date.toLocaleDateString()}` :
  getTimeMessage(stage)
)

const getTimeMessage = (stage) => (stage.responseDate === null ?
  getNoResponseMsg(stage) :
  `Received response in ${daysBetween(stage.date, stage.responseDate)} days`
)

const getNoResponseMsg = (stage) => (stage.date > new Date() ?
  `in ${daysUntil(stage.date)} days` :
  `${daysSince(stage.date)} days ago`
)

const daysBetween = (date1, date2) => Math.floor((date2 - date1) / MS_PER_DAY)

const daysSince = (date) => daysBetween(date, new Date())

const daysUntil = (date) => daysBetween(new Date(), date)
