export const haventApplied = {
  id: "2",
  company: 'Rigetti Computing',
  position: 'Software Engineer',
  url: '',
  recruiter: '',
  notes: '',
  date: '',
  stages: [],
}

export const ApplyInfo = {
  id: "0",
  type: "ONLINE",
  date: new Date(2016, 8, 12),
  responseDate: new Date(2016, 8, 14),
}

export const recruiterInfo = {
  id: "5",
  type: "RECRUITER",
  date: new Date(2016, 7, 1),
}

export const phoneScreenInfo = {
  id: "1",
  type: "PHONE",
  interviewer: 'John',
  date: new Date(2016, 9, 13),
  responseDate: new Date(2016, 9, 16),
  time: '8:30',
  description: 'Quick 1 hour technical phone screen.',
}

export const onsiteInfo = {
  id: "2",
  type: "ONSITE",
  interviewers: [],
  date: new Date(2016, 11, 5),
  responseDate: null,
  description: 'two technical + lunch + two technical',
}

export const googleInfo = {
  id: "1",
  company: 'Google',
  position: 'Software Engineer (New Grad)',
  url: "goo.gl/Nzba59",
  recruiter: "jkeigley@google.com",
  notes: "",
  profile: "https://www.seeklogo.net/wp-content/uploads/2015/09/new-google-favicon-logo.png",
  date: 'September 20th, 2016',
  stages: [recruiterInfo, phoneScreenInfo, onsiteInfo],
}

export const byId = {"1": googleInfo}

export const allIds = ["1"]

export const rowInfo = {
  companyCard: googleInfo,
  restCards: [phoneScreenInfo]
}