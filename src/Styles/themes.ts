export const theme = {
    colors: {
        default: '#fff',
        primary: '#0a0600',
        secondary: '#bb6f06',
        tertiary: '#4b3621',
        background: '#000',
        gradient: 'linear-gradient(to bottom, #bb6f06, #000)'
    },
    fonts: {
        default: {
            fontFamily: " 'Jost', 'sans-serif' ",
        },
        secondary: {
            fontFamily: " 'Poppins', sans-serif' "
        },
        title: {
            fontFamily: " 'Lobster', 'cursive' "
        },
    },
    sizes: {
        default: '1rem',
        title: '2.8rem',
        titleMobile: '1.7rem',
        subtitle: '1.3rem',
        titleDelivery: '5rem'
    }
}

export const size = {
    mobileS: '310px',
    mobileL: '520px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '2560px'
   }
   
export const device = {
    mobileS: `(min-width: ${size.mobileS}) and (max-width: ${size.mobileL})`,
    mobileL: `(min-width: ${size.mobileL}) and (max-width: ${size.tablet})`,
    tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    laptop: `(min-width: ${size.laptop}) and (max-width: ${size.desktop})`,
    desktop: `(min-width: ${size.desktop})`,
   };