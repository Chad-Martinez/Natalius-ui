export const validateEmailHelper = (email) => {
  let isValidEmail = false;
  if (
    email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    isValidEmail = true;
  }
  return isValidEmail;
};

export const validatePasswordHelper = (password) => {
  let isValidPassword = false;
  if (
    password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    )
  ) {
    isValidPassword = true;
  }
  return isValidPassword;
};

export const ETHNICITIES = [
  {
    id: 'E1',
    item: 'American Indian or Alaska Native',
  },
  {
    id: 'E2',
    item: 'Asian',
  },
  {
    id: 'E3',
    item: 'Black or African American',
  },
  {
    id: 'E4',
    item: 'Hispanic or Latino',
  },
  {
    id: 'E5',
    item: 'Native Hawaiian or Pacific Islander',
  },
  {
    id: 'E6',
    item: 'White',
  },
];

export const US_STATES = [
  {
    id: 'AL',
    item: 'Alabama',
  },
  {
    id: 'AK',
    item: 'Alaska',
  },
  {
    id: 'AZ',
    item: 'Arizona',
  },
  {
    id: 'AR',
    item: 'Arkansas',
  },
  {
    id: 'CA',
    item: 'California',
  },
  {
    id: 'CO',
    item: 'Colorado',
  },
  {
    id: 'CT',
    item: 'Connecticut',
  },
  {
    id: 'DE',
    item: 'Delaware',
  },
  {
    id: 'DC',
    item: 'District of Columbia',
  },
  {
    id: 'FL',
    item: 'Florida',
  },
  {
    id: 'GA',
    item: 'Georgia',
  },
  {
    id: 'HI',
    item: 'Hawaii',
  },
  {
    id: 'ID',
    item: 'Idaho',
  },
  {
    id: 'IL',
    item: 'Illinois',
  },
  {
    id: 'IN',
    item: 'Indiana',
  },
  {
    id: 'IA',
    item: 'Iowa',
  },
  {
    id: 'KS',
    item: 'Kansas',
  },
  {
    id: 'LA',
    item: 'Louisiana',
  },
  {
    id: 'ME',
    item: 'Maine',
  },
  {
    id: 'MD',
    item: 'Maryland',
  },
  {
    id: 'MA',
    item: 'Massachusetts',
  },
  {
    id: 'MI',
    item: 'Michigan',
  },
  {
    id: 'MN',
    item: 'Minnesota',
  },
  {
    id: 'MS',
    item: 'Mississippi',
  },
  {
    id: 'MO',
    item: 'Missouri',
  },
  {
    id: 'MT',
    item: 'Montana',
  },
  {
    id: 'NE',
    item: 'Nebraska',
  },
  {
    id: 'NV',
    item: 'Nevada',
  },
  {
    id: 'NH',
    item: 'New Hampshire',
  },
  {
    id: 'NJ',
    item: 'New Jersey',
  },
  {
    id: 'NM',
    item: 'New Mexico',
  },
  {
    id: 'NY',
    item: 'New York',
  },
  {
    id: 'NC',
    item: 'North Carolina',
  },
  {
    id: 'ND',
    item: 'North Dakota',
  },
  {
    id: 'OH',
    item: 'Ohio',
  },
  {
    id: 'OK',
    item: 'Oklahoma',
  },
  {
    id: 'OR',
    item: 'Oregon',
  },
  {
    id: 'PA',
    item: 'Pennsylvania',
  },
  {
    id: 'RI',
    item: 'Rhode Island',
  },
  {
    id: 'SC',
    item: 'South Carolina',
  },
  {
    id: 'SD',
    item: 'South Dakota',
  },
  {
    id: 'TN',
    item: 'Tennessee',
  },
  {
    id: 'TX',
    item: 'Texas',
  },
  {
    id: 'UT',
    item: 'Utah',
  },
  {
    id: 'VT',
    item: 'Vermont',
  },
  {
    id: 'VA',
    item: 'Virgina',
  },
  {
    id: 'WA',
    item: 'Washington',
  },
  {
    id: 'WI',
    item: 'Wisconsin',
  },
  {
    id: 'WY',
    item: 'Wyoming',
  },
];
