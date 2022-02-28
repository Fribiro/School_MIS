import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SectionOneWrapper = styled.div`
    width: 100%;
    //green b6cb58
    //blue 2c3e50
    //grey (242, 243, 244)


    & .inner-section-one {
        width: 100%;
        height: 100%;
    }

    & .sec-one-nav {
        width: 70%;
        height: 5rem;
        background-color: #2c3e50;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .sec-one-nav .row{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .sec1-nav{
        width: 33%;
        margin: 1rem;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    & .sec1-nav h2{
        color: #fff;
    }

    & .sec-one-main {
        background-color: rgb((242, 243, 244));
        width: 70%;
        height: 100%;
        margin: 0 auto;
    }

    & .row {
        width: 100%;
        height: 100%;
        display: flex;
    }

    & .col {
        width: 33%;
        background-color: #b6cb58;
        margin: 1rem;
        padding: 1.5rem;
        height: 13rem;
    }

    & .col p {
        font-size: 1rem;
        line-height: 1.5rem;
    }

    & .learn-more {
        width: 100%;
        display: flex;
    }

    & .learn-more:hover {
        text-decoration: underline 2px #2c3e50;
        cursor: pointer;
    }

    & .learn-more h3 {
        margin:1rem .5rem 1rem 0;
        color: #2c3e50;
    }

    & .learn-more svg {
        margin:1rem 1rem 1rem 0rem;
        padding: .2rem;
        color: #2c3e50;
    }
`

const SectionOne = () => {
  return (
      <SectionOneWrapper>
          <div className="inner-section-one">
              <div className="sec-one-nav">
                  <div className="row">
                      <div className="sec1-nav col-md-4">
                          <h2>Our Values</h2>
                      </div>
                      <div className="sec1-nav col-md-4">
                          <h2>Academics</h2>
                      </div>
                      <div className="sec1-nav col-md-4">
                          <h2>Academics</h2>
                      </div>
                  </div>
              </div>
              <div className="sec-one-main">
                  <div class="row">
                      <div class="col col-6 col-md-4">
                          <p>
                              We are committed to offering quality education in an enabling and sustainable environment that will nurture holistic development of the student in partnership with stakeholders
                          </p>
                          <div className='learn-more'>
                              <h3>Learn More</h3>
                              <FontAwesomeIcon icon="arrow-right-long" size="s" />
                          </div>
                      </div>
                      <div class="col col-6 col-md-4">
                          <p>
                              We are committed to offering quality education in an enabling and sustainable environment that will nurture holistic development of the student in partnership with stakeholders
                          </p>
                          <div className='learn-more'>
                              <h3>Learn More</h3>
                              <FontAwesomeIcon icon="arrow-right-long" size="s" />
                          </div>
                      </div>
                      <div class="col col-6 col-md-4">
                          <p>
                              We are committed to offering quality education in an enabling and sustainable environment that will nurture holistic development of the student in partnership with stakeholders
                          </p>
                          <div className='learn-more'>
                              <h3>Learn More</h3>
                              <FontAwesomeIcon icon="arrow-right-long" size="s" />
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col col-6 col-md-4">
                          <p>
                              We are committed to offering quality education in an enabling and sustainable environment that will nurture holistic development of the student in partnership with stakeholders
                          </p>
                          <div className='learn-more'>
                              <h3>Learn More</h3>
                              <FontAwesomeIcon icon="arrow-right-long" size="s" />
                          </div>
                      </div>
                      <div class="col col-6 col-md-4">
                          <p>
                              We are committed to offering quality education in an enabling and sustainable environment that will nurture holistic development of the student in partnership with stakeholders
                          </p>
                          <div className='learn-more'>
                              <h3>Learn More</h3>
                              <FontAwesomeIcon icon="arrow-right-long" size="s" />
                          </div>
                      </div>
                      <div class="col col-6 col-md-4">
                          <p>
                              We are committed to offering quality education in an enabling and sustainable environment that will nurture holistic development of the student in partnership with stakeholders
                          </p>
                          <div className='learn-more'>
                              <h3>Learn More</h3>
                              <FontAwesomeIcon icon="arrow-right-long" size="s" />
                          </div>
                      </div>
                  </div>
              </div>

          </div>

      </SectionOneWrapper>
  )
}

export default SectionOne