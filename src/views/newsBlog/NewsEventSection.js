import React, { useEffect } from 'react';
import Divider from '@mui/material/Divider';
import { Container, Section } from '../../globalStyles';
import PropTypes from 'prop-types';
import {
    ContentRow,
    BigColumn,
    SmallColumn
} from '../../component/Content/ContentStyles';

import {
    //TwitterFeedTitle,
    TwitterSubTitle,
    DrillBitLogo,
    //TwitterContent,
    NewsEventTitle,
    NewsEventContentTitle
} from './NewsBlogStyle';

const NewsEventSection = ({
    // twitterImg,
    // twitterTitle,
    // twitterSubTitle,
    drillbitLogo,
    //twitcontent,
    newsEvent
}) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        document.getElementsByClassName('twitter-embed')[0].appendChild(script);
    }, []);

    return (
        <>
            <Section
                padding="50px 0">
                <Container>
                    <ContentRow>
                        <SmallColumn>
                            <NewsEventTitle>
                                News & Events
                            </NewsEventTitle>
                            {newsEvent.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <TwitterSubTitle>
                                            {item.title}
                                        </TwitterSubTitle>
                                        <NewsEventContentTitle>
                                            {item.subtitle}
                                        </NewsEventContentTitle>
                                        <a href={item?.link} rel="noreferrer" target="_blank">
                                            <img style={{ marginTop: '25px', marginBottom: '25px' }} src={item.arrowIcon} />
                                        </a>
                                        <Divider />
                                    </div>
                                );
                            })}
                        </SmallColumn>
                        <BigColumn>
                            {/* <TwitterFeedTitle>
                                <img src={twitterImg} />
                                {twitterTitle}
                                <TwitterSubTitle>
                                    {twitterSubTitle}
                                </TwitterSubTitle>
                            </TwitterFeedTitle>
                            <Divider /> */}
                            <DrillBitLogo src={drillbitLogo} />
                            {/* <TwitterFeedTitle>
                                Drillbit
                            </TwitterFeedTitle>
                            <TwitterContent>
                                {twitcontent}
                            </TwitterContent> */}
                            <div className='twitter-embed'>
                                <a className='twitter-timeline' data-width='600' data-height='500' data-theme='white' href='https://twitter.com/Drillbit05?ref_src=twsrc%5Etfw' target='_blank' rel='noreferrer'>Tweets by Drillbit</a>
                            </div>
                        </BigColumn>
                    </ContentRow>
                </Container>
            </Section>
        </>
    );
};


NewsEventSection.propTypes = {
    twitterImg: PropTypes.string,
    twitterTitle: PropTypes.string,
    twitterSubTitle: PropTypes.string,
    drillbitLogo: PropTypes.string,
    twitcontent: PropTypes.string,
    newsEvent: PropTypes.object
};

export default NewsEventSection;
