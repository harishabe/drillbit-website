import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import { Grid, Box } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {
    Heading,
    Subtitle,
    APISection,
    APIHeader,
    APISubHeader
} from '../../component/Content/ContentStyles';
import {
    SubHeaderTitle
} from './SupportPageStyle';
import { Container, Section } from '../../globalStyles';
import {
    List,
    ListItem,
    APIUrl,
    APIUrlLink,
    DividerImgIcon,
    CursorPointer,
} from './SupportPageStyle';
import TableAPI from './TableAPI';

const OpenAPISection = (props) => {
    const {
        menuLeftData,
        systemEntityData,
        divider,
        allowedHttp,
        allowedHttpData,
        headerData,
        serverResData
    } = props;

    const scrollTosection = (e, index) => {
        e.preventDefault();
        const element = document.getElementById(index + '-content');
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };

    return (
        <Section
            padding='50px 0'>
            <Container>
                <Grid container spacing={3}>
                    <Box
                        component={Grid}
                        item
                        xs={12}
                        sm={4}
                        md={4}
                    >
                        {menuLeftData.map((data, i) => (
                            <div key={i} style={{ position: 'fixed', height: '100px' }}>
                                <List margin="24px 0px 24px 0px">
                                    <ListItem>
                                        <strong>{data.title}</strong>
                                        {data?.subLink.map((item, i) => (
                                            <List key={i}>
                                                <CursorPointer>
                                                    <ListItem margin="14px 0px 14px 24px" onClick={(e) => scrollTosection(e, i)}>
                                                        {item}
                                                    </ListItem>
                                                </CursorPointer>
                                            </List>
                                        ))}
                                    </ListItem>
                                </List>
                            </div>
                        ))}
                    </Box>
                    <Box
                        component={Grid}
                        item
                        xs={12}
                        sm={8}
                        md={8}
                    >
                        <Heading
                            fontSize='2.75rem'
                        >
                            DrillBit API Overview
                        </Heading>
                        <Subtitle
                            width='100%'
                        >
                            DrillBit API is a service to check plagiarism, this guide helps to integrate in a convenient way.
                            If you have any prior knowledge of the REST services, it would be easy to start with integrations.
                        </Subtitle>
                        <APIUrl margin='10px 0px'>
                            Please find below the base URL :
                        </APIUrl>
                        <APIUrlLink margin='10px 0px' fontWeight='bold'>
                            https://www.drillbitplagiarismcheck.com/drillbit_new
                        </APIUrlLink>
                        <br />
                        <APIUrl>
                            API provides methods for interacting with the following system entities:
                        </APIUrl>
                        {systemEntityData.map((data, i) => (
                            <List key={i} margin="24px 0px 24px 0px">
                                <ListItem>
                                    <strong>{data.title}</strong>
                                    {data?.subLink.map((item, i) => (
                                        <List key={i}>
                                            <ListItem margin="14px 0px 14px 24px">
                                                {item}
                                            </ListItem>
                                        </List>
                                    ))}
                                </ListItem>
                            </List>
                        ))}
                        <DividerImgIcon src={divider}></DividerImgIcon>
                        <TableAPI id="0-content"
                            headerTitle={allowedHttp}
                            subTitle='HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. It can be as follows:'
                            tableCell1='HTTP Method'
                            tableCell2='Description'
                            allowedHttpData={allowedHttpData}

                        />
                        <DividerImgIcon src={divider}></DividerImgIcon>
                        <TableAPI id="1-content"
                            headerTitle='Header'
                            subTitle='These headers are required to make a successful request:'
                            tableCell1='Header'
                            tableCell2='Description'
                            allowedHttpData={headerData}

                        />
                        <DividerImgIcon src={divider}></DividerImgIcon>
                        <TableAPI id="2-content"
                            headerTitle='Description Of Usual Server Responses'
                            subTitle=''
                            tableCell1='HTTP Code'
                            tableCell2='Description'
                            allowedHttpData={serverResData}

                        />
                        <DividerImgIcon src={divider}></DividerImgIcon>
                        <SubHeaderTitle id="3-content">
                            Authorization and Authentication
                        </SubHeaderTitle>
                        <Subtitle
                            fontSize="1rem"
                            width='100%'
                        >
                            DRILLBIT REST API uses basic auth to authorize calls. In exchange for these credentials,
                            DRILLBIT provides access tokens on valid authentication called bearer tokens that you use for
                            authorization when making REST API requests.
                        </Subtitle>
                        <APIHeader>
                            Base URL
                        </APIHeader>
                        <APISubHeader>
                            Method Type : POST
                        </APISubHeader>
                        <APISection>
                            https://www.drillbitplagiarismcheck.com/drillbit_new/api/authenticate
                        </APISection>
                        <APIHeader>
                            Request
                        </APIHeader>
                        <APISection>
                            <ReactJson src={{
                                'username': 'xyzd',
                                'password': '123456'
                            }} />
                        </APISection>
                        <APIHeader>
                            Response
                        </APIHeader>
                        <APISection>
                            <ReactJson src={{
                                'jwt': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWtlc2hAZHJpbGxiaXRwbGFna' + <br /> +
                                    'WFyaXNtLmNvbSIsImV4cCI6MTYwODgzOTgyMCwiaWF0IjoxNjA4ODAzODI' + <br /> +
                                    'wfQ.8FxwAphb7qWeIt3ETTRYrtLlpvFWr7FMQp5tqYVeVLM'
                            }} />
                        </APISection>
                        <DividerImgIcon src={divider}></DividerImgIcon>
                        <div id="4-content">
                            <SubHeaderTitle>
                                Folder
                            </SubHeaderTitle>
                            <APIHeader>
                                Base URL
                            </APIHeader>
                            <APISubHeader>
                                Method Type : POST
                            </APISubHeader>
                            <APISection>
                                https://www.drillbitplagiarismcheck.com/drillbit_new/api/assignments
                            </APISection>
                            <APIHeader>
                                Request
                            </APIHeader>
                            <APISection>
                                <ReactJson src={{
                                    'assignment_name': 'sample assignment 56',
                                    'exclude_refernces': 'no',
                                    'exclude_quotes': 'no',
                                    'exclude_small_sources': 'yes'
                                }} />
                            </APISection>
                            <APIHeader>
                                Response
                            </APIHeader>
                            <APISection>
                                <ReactJson src={{
                                    'name': 'sample assignment 56',
                                    'ass_id': 78482,
                                    'exclude_refernces': 'no',
                                    'exclude_quotes': 'no',
                                    'exclude_small_sources': 'yes',
                                    'links': [
                                        {
                                            'rel': 'self',
                                            'href': 'https://www.drillbitplagiarismcheck.com/drillbit_new/api/assignments/78'
                                        }
                                    ]
                                }} />
                            </APISection>
                        </div>
                        <DividerImgIcon src={divider}></DividerImgIcon>
                        <div id="5-content">
                            <SubHeaderTitle>
                                Update Folder
                            </SubHeaderTitle>
                            <APIHeader>
                                Base URL
                            </APIHeader>
                            <APISubHeader>
                                Method Type : PUT
                            </APISubHeader>
                            <APISection>
                                https://www.drillbitplagiarismcheck.com/drillbit_new/api/assignments/ass_id
                            </APISection>
                            <APIHeader>
                                Request
                            </APIHeader>
                            <APISection>
                                <ReactJson src={{
                                    'assignment_name': 'test100',
                                    'exclude_refernces': 'no',
                                    'exclude_quotes': 'no',
                                    'exclude_small_sources': 'yes'
                                }
                                } />
                            </APISection>
                            <APIHeader>
                                Response
                            </APIHeader>
                            <APISection>
                                <ReactJson src={{
                                    'status': 200,
                                    'message': 'Assignment has been updated successfully',
                                    'links': [
                                        {
                                            'rel': 'self',
                                            'href': 'https://www.drillbitplagiarismcheck.com/drillbit_new/api/assignments/58963'
                                        }
                                    ]
                                }} />
                            </APISection>
                        </div>
                        <DividerImgIcon src={divider}></DividerImgIcon>
                        <div id="6-content">
                            <SubHeaderTitle>
                                Submission
                            </SubHeaderTitle>
                            <APIHeader>
                                Base URL
                            </APIHeader>
                            <APISubHeader>
                                Method Type : POST
                            </APISubHeader>
                            <APISection>
                                https://www.drillbitplagiarismcheck.com/drillbit_new/api/submission
                            </APISection>
                            <APIHeader>
                                Request
                            </APIHeader>
                            <APISubHeader>
                                Content type: multipart/form-data
                            </APISubHeader>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Key
                                            </TableCell>
                                            <TableCell>
                                                Value
                                            </TableCell>
                                            <TableCell>
                                                Type
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="left">name</TableCell>
                                            <TableCell align="left">test</TableCell>
                                            <TableCell align="left">text</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">title</TableCell>
                                            <TableCell align="left">computers</TableCell>
                                            <TableCell align="left">text</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">assignment_id</TableCell>
                                            <TableCell align="left">58963</TableCell>
                                            <TableCell align="left">text</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">doc_type</TableCell>
                                            <TableCell align="left">thesis</TableCell>
                                            <TableCell align="left">text</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">file</TableCell>
                                            <TableCell align="left">sample.pdf</TableCell>
                                            <TableCell align="left">file</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <APIHeader>
                                Response
                            </APIHeader>
                            <APISection>
                                <ReactJson src={{
                                    'paper_id': 202576,
                                    'name': 'test',
                                    'title': '1',
                                    'mail_id': 'rakesh@drillbitplagiarism.com',
                                    'ass_id': 58963,
                                    'percent': '--',
                                    'upload_time': '2020-12-25 15:11:39',
                                    'd_key': '--',
                                    'pages': '12',
                                    'file_size': '0 Kb',
                                    'language': 'English',
                                    'doc_type': 'thesis',
                                    'links': [
                                        {
                                            'rel': 'self',
                                            'href': 'https://www.drillbitplagiarismcheck.com/drillbit_new/api/submission/202576'
                                        },
                                        {
                                            'rel': 'SubmissionsList',
                                            'href': 'https://www.drillbitplagiarismcheck.com/drillbit_new/api/submissionsList/58963'
                                        }
                                    ]
                                }
                                } />
                            </APISection>
                        </div>
                        <DividerImgIcon src={divider}></DividerImgIcon>
                        <div id="7-content">
                            <SubHeaderTitle>
                                Submission Details
                            </SubHeaderTitle>
                            <APIHeader>
                                Base URL
                            </APIHeader>
                            <APISubHeader>
                                Method Type : GET
                            </APISubHeader>
                            <APISection>
                                https://www.drillbitplagiarismcheck.com/drillbit_new/api/submission/paper_id
                            </APISection>
                            <APIHeader>
                                Response
                            </APIHeader>
                            <APISection>
                                <ReactJson src={{
                                    'paper_id': 184563,
                                    'name': 'Sakshi',
                                    'title': 'research paper',
                                    'mail_id': 'support@drillbitplagiarism.com',
                                    'ass_id': 56715,
                                    'percent': '19',
                                    'upload_time': '2020-11-19 17:47:06',
                                    'd_key': '7HHJXDYVNQ3Y5JF7RNFN',
                                    'pages': '11',
                                    'file_size': '431 KB',
                                    'language': 'English',
                                    'doc_type': 'Research Paper',
                                    'links': [
                                        {
                                            'rel': 'self',
                                            'href': 'https://www.drillbitplagiarismcheck.com/drillbit_new/api/submission/184563'
                                        }
                                    ]
                                }} />
                            </APISection>
                        </div>
                        <DividerImgIcon src={divider}></DividerImgIcon>
                        <div id="8-content">
                            <SubHeaderTitle>
                                Delete Submission
                            </SubHeaderTitle>
                            <APIHeader>
                                Base URL
                            </APIHeader>
                            <APISubHeader>
                                Method Type : DELETE
                            </APISubHeader>
                            <APISection>
                                https://www.drillbitplagiarismcheck.com/drillbit_new/api/submission/paper_id
                            </APISection>
                            <APISection>
                                <ReactJson src={{
                                    'submissionDetails': {
                                        'paper_id': 183271,
                                        'name': 'Princelina Bora',
                                        'title': 'Plagiarism check',
                                        'ass_id': 0,
                                        'links': []
                                    },
                                    'status': 200,
                                    'message': 'Submission Deleted Successfully',
                                    'links': []
                                }} />
                            </APISection>
                        </div>
                        <DividerImgIcon src={divider}></DividerImgIcon>
                        <div id="9-content">
                            <SubHeaderTitle>
                                Submission List
                            </SubHeaderTitle>
                            <APIHeader>
                                Base URL
                            </APIHeader>
                            <APISubHeader>
                                Method Type : GET
                            </APISubHeader>
                            <APISection>
                                https://www.drillbitplagiarismcheck.com/drillbit_new/api/submissionsList/ass_id
                            </APISection>
                            <APISection>
                                <ReactJson src={{
                                    'submissionsListResponse': {
                                        'content': [
                                            {
                                                'paper_id': 163261,
                                                'name': 'Ananya Sharma',
                                                'title': 'Contempt of court with reference to Justice CS Karnan The Honourable SC of India',
                                                'mail_id': 'rakesh@drillbitplagiarism.com',
                                                'ass_id': 56715,
                                                'percent': 3,
                                                'upload_time': '2020-10-15 16:10:26',
                                                'd_key': '22VU9KRUU7PL3XDQJDOW',
                                                'pages': '30',
                                                'file_size': '162',
                                                'language': 'English',
                                                'doc_type': 'Thesis',
                                                'links': []
                                            }
                                        ],
                                        'pageable': {
                                            'sort': {
                                                'sorted': false,
                                                'unsorted': true,
                                                'empty': true
                                            },
                                            'offset': 0,
                                            'pageSize': 25,
                                            'pageNumber': 0,
                                            'unpaged': false,
                                            'paged': true
                                        },
                                        'last': true,
                                        'totalElements': 1,
                                        'totalPages': 1,
                                        'size': 25,
                                        'number': 0,
                                        'sort': {
                                            'sorted': false,
                                            'unsorted': true,
                                            'empty': true
                                        },
                                        'numberOfElements': 1,
                                        'first': true,
                                        'empty': false
                                    },
                                    'status': 200,
                                    'message': 'success'
                                }} />
                            </APISection>
                        </div>
                        <DividerImgIcon src={divider}></DividerImgIcon>
                        <div id="10-content">
                            <SubHeaderTitle>
                                Download Report
                            </SubHeaderTitle>
                            <APIHeader>
                                Base URL
                            </APIHeader>
                            <APISubHeader>
                                Method Type : GET
                            </APISubHeader>
                            <APISection>
                                https://www.drillbitplagiarismcheck.com/drillbit_new/api/submission/paper_id/dkey/download
                            </APISection>
                            <APISection>
                                You need to provide paper id and dkey. Dkey is a token which is generated when you get a
                                similarity percentage. So in order to download you need to mention the exact dkey and relevant
                                paper_id.
                            </APISection>
                        </div>
                        <DividerImgIcon src={divider}></DividerImgIcon>
                    </Box>
                </Grid>
            </Container>
        </Section>
    );
};

OpenAPISection.propTypes = {
    menuLeftData: PropTypes.any,
    systemEntityData: PropTypes.object,
    divider: PropTypes.string,
    allowedHttp: PropTypes.string,
    allowedHttpData: PropTypes.object,
    headerData: PropTypes.object,
    serverResData: PropTypes.object
};

export default OpenAPISection;
