import React from 'react';
import styled from 'styled-components'


const DateLine = styled.div`
  padding-left: 5px;
  color: #4e4a46;
`;

const TimelineText = styled.div`
  display: grid;
  padding: 10px;
  color: #4e4a46;
`;

const TimelinePoints = styled.div`
  display: grid;
  grid-template-columns: 32px 90%;


`;

const TimelinePoint = styled.div`
  display: grid;


`;

const Dot = styled.div`
  background: #c95e50;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid #fffce1;
  margin: 0 auto;
`;

const Line = styled.div`
  width: 2px;
  height: 100%;
  background: #fffce1;
  margin: 0 auto;
  margin-top: 2px;
`;

const back = {
backgoundColor: '#b4bad2'
}

class History extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div style={back}>
      <TimelinePoints>
      <TimelinePoint>
      <Dot/>

      </TimelinePoint>
      <DateLine>2017</DateLine>
      <Line />
      <TimelineText>     
      Ball tip shank picanha short ribs kielbasa boudin doner, rump ham ham hock tri-tip jowl leberkas. Shoulder tail pork kielbasa meatball shankle. Tenderloin beef filet mignon tail pastrami picanha meatloaf drumstick brisket kevin. Pancetta beef hamburger landjaeger sirloin meatball salami alcatra bresaola.
      </TimelineText>
      </TimelinePoints>
      <TimelinePoints>
        <TimelinePoint>
          <Dot />

        </TimelinePoint>
        <DateLine>2017</DateLine>
        <Line />
        <TimelineText>
          Ball tip shank picanha short ribs kielbasa boudin doner, rump ham ham hock tri-tip jowl leberkas. Shoulder tail pork kielbasa meatball shankle. Tenderloin beef filet mignon tail pastrami picanha meatloaf drumstick brisket kevin. Pancetta beef hamburger landjaeger sirloin meatball salami alcatra bresaola.
      </TimelineText>
      </TimelinePoints>
      </div>
    )
  }
}

export default History
