import moment from 'moment';

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
    case 'OFFER':
      return 'Received offer'
    case 'REJECTION':
      return 'Received rejection'
    case 'CHALLENGE':
      return 'Did coding challenge'
    default:
      throw `Unknown stage type ${stage.type}!`
  }
}

export const getStageSubtitle = (stage) => (stage.type == 'RECRUITER' ?
  `on ${stage.date.toLocaleDateString()}` :
  getTimeMessage(stage)
)

const getTimeMessage = (stage) => (stage.responseDate === null ?
  getNoResponseMsg(stage) :
  `Received response ${moment(stage.responseDate).from(moment(stage.date))}`
)

const getNoResponseMsg = (stage) => (stage.date > new Date() ?
  moment(stage.date).toNow() :
  moment(stage.date).fromNow()
)
