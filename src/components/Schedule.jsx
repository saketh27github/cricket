import React from 'react'

const Schedule = () => {
  return (
    <div className='Schedule'>

        <div className='match'>
            <div className='date'>Match-No | Match Date</div>
            <div className='time'>Match Time IST</div>
            <hr />
            <div className='teams'>
                <div className='team-1'>
                    <div className='team-logo-1'>
                        <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png" className='w-100' alt="LOGO" />
                    </div>
                    <div className='team-name-1'>Home Team Name</div>
                </div>
                <span className='vs'>VS</span>
                <div className='team-2'>
                    <div className='team-name-2'>Away Team Name</div>
                    <div className='team-logo-2'>
                        <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png" className='w-100' alt="LOGO" />
                    </div>

                </div>

            </div>
              <hr />
              <div>Venue</div>
        </div>


    </div>
  )
}

export default Schedule