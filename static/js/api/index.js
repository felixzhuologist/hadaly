export const googleInfo = {
  id: "1",
  company: 'Google',
  position: 'Software Engineer (New Grad)',
  app_url: "goo.gl/Nzba59",
  recruiter: "jkeigley@google.com",
  notes: "",
  date: 'September 20th, 2016',
  stages: ["1", "2"],
}

export const phoneScreenInfo = {
  id: "1",
  type: "Phone",
  interviewer: 'John',
  date: '13.10.16',
  time: '8:30',
  description: 'Quick 1 hour technical phone screen.',
}

export const onsiteInfo = {
  id: "2",
  type: "Onsite",
  interviewers: [],
  date: '5.12.16',
  time: '10:30',
  description: 'two technical + lunch + two technical',
}

export const byId = {"1": googleInfo}

export const allIds = ["1"]

export const rowInfo = {
  companyCard: googleInfo,
  restCards: [phoneScreenInfo]
}