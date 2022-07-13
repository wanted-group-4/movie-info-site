const size = {
  mobile: '770px',
  desktop: '3600px',
};

export const theme = {
  color: {
    black: '#000000',
    white: '#FFFFFF',
    // grayscale
    gray_01: '#212121',
    gray_02: '#616161',
    gray_03: '#888888',
    gray_04: '#CCCCCC',
    gray_05: '#EEEEEE',
    gray_06: '#F5F5F5',
    // primary
    primary_01: '#282B30',
    primary_02: '#212225',
    // secondary
    secondary_01: '#ec4746',
    secondary_02: '#ff8b8b',
  },

  deviceSize: {
    max: {
      mobile: `(max-width : ${size.mobile})`,
      desktop: `(max-width : ${size.desktop})`,
    },
    min: {
      mobile: `(min-width : ${size.mobile})`,
      desktop: `(min-width : ${size.desktop})`,
    },
  },
};
