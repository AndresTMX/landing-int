import './index.css'

function SocialMediaIcons({variant}) {

    const customVariant = variant? variant: 'all'

    const linkedin = 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF3d5K9N5PtMQAAAYs0uX-w2RDdw9THd9nN6hwovjArhCB3OamxHUOcqXJDOYuUDA0ALWAXMH4Ft2zd0TfOjp7GZF_XRU3T0DFvWpuhRh7uSMqe-7DjCf_HWcMf-zucNepq5dI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fingenieriadigital'
    const instagram = 'https://www.instagram.com/ingenieriadigitalmx/'

    return (
      <>
        {customVariant === 'all' && (
          <div className="icons-container">
            <a href={instagram}>
              <img src="instagram-icon.svg" />
            </a>

            <a href={linkedin}>
              <img src="linkedin-icon.svg" />
            </a>
          </div>
        )}

        {customVariant === 'linkedin' && (
          <div className="icons-container">
            <a href={linkedin}>
              <img src="linkedin-icon.svg" />
            </a>
          </div>
        )}

        {customVariant === 'instagram' && (
          <div className="icons-container">
            <a href={instagram}>
              <img src="instagram-icon.svg" />
            </a>
          </div>
        )}


      </>
    );
}

export {SocialMediaIcons};