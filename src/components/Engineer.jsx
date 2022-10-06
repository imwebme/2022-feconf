import React from 'react';

const Engineer = () => {
  return (

    <div className='container enginner-container' id="enginner">
      <img className='enginner-title' src="/img/title.png" alt='title'></img>
      <div className='enginner-content-wrap'>
      <div className='enginner-content-card'>
        <header>
          <h1>Daily Life</h1>
        </header>
        <p className='paragraph'>7시~11시 자율출근제<br/> 자유로운 반차,연차 사용<br/>금요일 1시간 단축 근무<br/>연차 1일 당 10만원의 지원비 지급<br/>
        월 교통비 20만원 지급<br/>
        일 15,000원의 식대 지급<br/>
        </p>
      </div>
      <div className='enginner-content-card'>
          <h1>Growth</h1>
        <p className='paragraph'>도서 구입비용 지원<br/>
        교육 및 세미나 지원<br/>
        영어 회화 교육비 지원<br/>
        문화 회식</p>
      </div>
      <div className='enginner-content-card'>
      <header>
          <h1>Anniversary</h1>
        </header>
        <p className='paragraph'>
          생일 당일 3시간 조기 퇴근<br/>
          백화점 10만원 상품권 생일 선물 지급<br/>
          근로자의 날 선물 지급<br/>
          어버이날 선물 지급<br/>
        </p>
      </div>
      </div>
    </div>
  );
}

export default Engineer;
