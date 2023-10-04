export const Theme = {
    colors : {
      brand: '#574AE8',

      /* dark scale */
      dark: {
        10: '#1A202C', /* 100% */
        20: '#717171', /* 70% */
        30: '#F3F5F7', /* 20% */
        40: '#FFF', /* 10% */
      },

      /* color system */
      system: {
        message: '#2962FF',
        success: '#0BB07B',
        warning: '#FFCE52',
        error: '#F03D3D',
        info: '#E0E0E0',

      }
    },

    background: {
      /* header bg*/
      linear: {
       'puple-blue': 'linear-gradient(90deg, #574AE8 0%, #3EA1DB 100%);'
      }
    },

    typography : {
      body: `font-size: 18px;
             font-weight: 400;`,

      title: `font-size: 26px;
              font-weight: 400;`,
      
      sm: `font-size: 16px;
           font-weight: 400;`,

      placeholder: `font-family: 'Inter', sans-serif;
                    font-size: 18px;
                    font-weight: 600;`,

      'nav-link': `font-size: 24px;
                   font-weight: 400`
    }

}