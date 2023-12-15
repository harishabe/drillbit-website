export const navBarData = [
    {
        icon: './images/navSubMenuIcon/organization.svg',
        title: 'Organization',
        link: 'organization',
        subTitle: 'The complete solution for all your organizational needs whether you’re a small business, non-profit, or multi-nationals.'
    },
    {
        icon: './images/navSubMenuIcon/institute.svg',
        title: 'Institutions',
        link: 'institute',
        subTitle: 'We help universities, colleges and schools adhere to the highest academic standards.'
    },
    {
        icon: './images/navSubMenuIcon/person.svg',
        title: 'Personal',
        link: 'personal',
        subTitle: 'A personal plagiarism private detective to ensure your work is always beyond reproach.'
    },
];

export const ServiceSubMenu = [
    {
        icon: './images/serviceSubMenuIcon/faq.svg',
        title: 'FAQ ’s',
        link: 'faq',
        subTitle: 'Got questions? We’ve got answers. here are some of the most frequently asked questions about DrillBit’s innovative anti-plagiarism software'
    },
    {
        icon: './images/serviceSubMenuIcon/api.svg',
        title: 'Open API ’s',
        link: 'openAPI',
        subTitle: 'We offer seamless API integration to use on other platforms, negating the need for multiple log-ins.'
    },
    {
        icon: './images/serviceSubMenuIcon/pdf.svg',
        title: 'User guide',
        link: 'userGuide',
        subTitle: 'DrillBit is easy to use, but if you’re in a hurry, our video tutorials and user guides will get you up and running in a jiffy.'
    },
];

export const arrowData = [
    { menu: 'home', link: '/', arrow: false, arrowLink: '' },
    { menu: 'products', link: '', arrow: true, arrowLink: './images/navSubMenuIcon/arrowDown.svg' },
    { menu: 'integration', link: 'integration', arrow: false },
    { menu: 'support', link: '', arrow: true, arrowLink: './images/navSubMenuIcon/arrowDown.svg' },
    { menu: 'contact_menu', link: 'contactus', arrow: false, arrowLink: '' }
];

export const heroOne = {
    id: 'about',
    showTitle: false,
    inverse: true,
    btnShow: true,
    bigImage: true,
    fontSize: '2.75rem',
    headline: 'headline',
    description: 'description',
    buttonLabel: 'Request Demo',
    imgStart: 'start',
    img: './images/ContentSvgIcon.svg',
    start: 'true',
};
export const logDetails = {
    drillbitLogo: './images/logo/drillBitLogo.svg'
};
export const products = {
    id: 'products',
    showTitle: true,
    reverse: true,
    btnShow: true,
    lightBg: false,
    fontSize: '2.25rem',
    title: 'Products',
    headline: 'product_headline',
    description: 'product_description',
    buttonLabel: 'Know More',
    img: './images/products.svg',
    prodType: [
        {
            image: './images/products/organisation.svg',
            type: 'Organization',
            arrow: './images/products/arrow.svg',
            line: './images/products/line.svg',
            navLink: './organization'
        },
        {
            image: './images/products/institute.svg',
            type: 'Institutions',
            arrow: './images/products/arrow.svg',
            line: './images/products/line.svg',
            navLink: './institute'
        },
        {
            image: './images/products/personal.svg',
            type: 'Personal',
            arrow: './images/products/arrow.svg',
            line: './images/products/line.svg',
            navLink: './personal'
        }
    ]
};

export const integration = {
    id: 'integration',
    textAlign: 'center',
    showTitle: false,
    reverse: true,
    btnShow: true,
    lightBg: false,
    fontSize: '2.75rem',
    title: 'Integration',
    headline: 'Integration',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Arcu eget augue arcu gravida. Laoreet  eget aliquet consequat.',
    buttonLabel: 'Know More',
    img: './images/integration.svg',
    logoList: [
        {
            logo: './images/integration/google-classroom.svg'
        },
        {
            logo: './images/integration/quiklrn.svg'
        },
        {
            logo: './images/integration/canvas.svg'
        },
        {
            logo: './images/integration/langquill.svg'
        },
        {
            logo: './images/integration/moodle.svg'
        },
        {
            logo: './images/integration/blackboard.svg'
        }
    ]
};


export const keyStatistics = {
    id: 'keyStatistics',
    showTitle: false,
    reverse: true,
    btnShow: true,
    fontSize: '2.25rem',
    title: 'key_statistics_title',
    headline: 'key_statistics_headline',
    description: 'key_statistics_description',
    statistics: [
        {
            count: '65 M+',
            title: 'pages scanned',
            subtitle: 'We have scanned millions of pages in real time to provide fast accurate results and data at your fingertips.',
        },
        {
            count: '100K+',
            title: 'global users',
            subtitle: 'From Manhattan to Bangalore, Tokyo to Tel Aviv, we have users all around the world accessing our software 24/7.',
        },
        {
            count: '1000+',
            title: 'happy clients', 
            subtitle: 'A smile costs nothing but our software is priceless. We’re happy to have put smiles on the faces of so many satisfied customers.',
        }
    ]
};


export const clients = {
    id: 'clients',
    showTitle: false,
    reverse: true,
    btnShow: true,
    fontSize: '2.75rem',
    title: 'client_title',
    headline: 'client_headline',
    clientLogo: [
        {
            logo: './images/clientLogo/isro-sac.svg'
        },
        {
            logo: './images/clientLogo/medical-science.svg'
        },
        {
            logo: './images/clientLogo/ramaiha-medical-college.svg'
        },
        {
            logo: './images/clientLogo/cmr-group.svg'
        },
        {
            logo: './images/clientLogo/nes.svg'
        },
        {
            logo: './images/clientLogo/malla-reddy.svg'
        },
        {
            logo: './images/clientLogo/gateway-excellence.svg'
        },
        {
            logo: './images/clientLogo/national.svg'
        }
    ]
};

export const certificate = {
    id: 'certificate',
    showTitle: false,
    reverse: true,
    btnShow: true,
    fontSize: '2.75rem',
    title: 'certification_title',
    headline: 'certification_sub_title',
    clientLogo: [
        {
            logo: './images/iso/ISO-1.png',
            type:'iso'
        },
        {
            logo: './images/iso/SOC.jpg',
            type:'soc'
        },
        {
            logo: './images/iso/PNG_GDPR.png',
            type:'GDPR'
        }
    ]
};

export const services = {
    id: 'services',
    showTitle: false,
    reverse: true,
    btnShow: true,
    fontSize: '3.25rem',
    title: 'service_title',
    headline: 'service_subtitle',
    description: 'key_statistics_description',
    line: './images/Line.svg',
    icons: [
        {
            icon: './images/serviceIcon/writing.svg',
            title: 'service_write_icon'
        },
        {
            icon: './images/serviceIcon/repository.svg',
            title: 'service_dedicate_repo'
        },
        {
            icon: './images/serviceIcon/detect.svg',
            title: 'service_detect_hidden'
        },
        {
            icon: './images/serviceIcon/smallfont.svg',
            title: 'service_small_font'
        },
        {
            icon: './images/serviceIcon/authenticity.svg',
            title: 'service_authenticity'
        },
        {
            icon: './images/serviceIcon/cost.svg',
            title: 'service_cost_effective'
        }
    ]
};



export const integrationPage = {
    id: 'integration',
    showTitle: false,
    inverse: true,
    bigImage: true,
    btnShow: true,
    fontSize: '2.75rem',
    headline: 'integration_headline',
    description: 'integration_description',
    buttonLabel: 'Request Demo',
    imgStart: 'start',
    img: './images/integrationPage/integration.svg',
    start: 'true',
    lmsintegrationTitle: 'LMSIntegration_title',
    lmsIntegrationLogoTitle: [
        {
            logo: './images/integration/moodle.svg',
            title: '“Moodle is the worlds most popular learning management system and open-source learning management system”. DrillBit integrates with Moodle platform and created a plugin for easy access. DrillBit users can download the plugin and get a plagiarism report on Moodle LMS.',
            more: 'Know more'
        },
        {
            logo: './images/integration/blackboard.svg',
            title: 'Blackboard is 20+ years old learning management system (LMS) that “allows you to deliver life-changing teaching and learning experiences with unmatched pedagogical autonomy.” DrillBit has been integrated into multiple platforms and easy to use. DrillBit can deliver plagiarism report on Blackboard LMS.',
            more: 'Know more'
        },
        {
            logo: './images/integration/canvas.svg',
            title: '“Canvas is the learning management platform that makes teaching and learning exponentially better”. DrillBit integrates seamlessly into Canvas learning management platform and allows instructor/students to submit assignments and get a quick result.',
            more: 'Know more'
        },
        {
            logo: './images/integration/google-classroom.svg',
            title: '“Google Classroom is your all-in-one place for teaching and learning. Our easy-to-use and secure tool helps educators manage, measure, and enrich learning experiences.” you can submit your assignment to DrillBit via Google Classroom to get a fast result and to avoid multiple logins.',
            description: '',
            more: 'Know more'
        },
        {
            logo: './images/integration/langquill.svg',
            title: '“Online Language Lab - Access comprehensive language lab anytime, anywhere, and on any device”. DrillBit has partnered with AI-enabled grammar checker to identify mistakes and language errors.',
            more: 'Know more'
        },
        {
            logo: './images/integration/quiklrn.svg',
            title: '“Cloud-based learning services provide anytime anywhere access of the courses. The mobile users can access the content while being on the move at the point of need”. All users of Quiklrn can access DrillBit and get an instant plagiarism report.',
            more: 'Know more'
        }
    ]
};

export const organizationData = {
    id: 'organization',
    showTitle: false,
    inverse: true,
    bigImage: true,
    btnShow: true,
    type: 'Organization',
    fontSize: '2.75rem',
    headline: 'organization_headline',
    description: 'organization_description',
    buttonLabel: 'Request demo',
    imgStart: 'start',
    img: './images/organizationPage/organization.svg',
    start: 'true',
    organizationTitle: 'organization_title',
    organizationList: [
        {
            logo: './images/organizationPage/security.svg',
            title: 'We adhere to all international data privacy protocols (FERPA, COPPA, and GDPR) when secur-ing and processing your data in your locality. We use sophisticated encryption technology to safeguard your data.',
            more: 'Total data safety'
        },
        {
            logo: './images/organizationPage/people.svg',
            title: 'DrillBit’s proprietary design makes our software available and equally accessible to everyone within an educational organization, regardless of any disabilities. Our AI-powered tools allow everyone to find or improve their voice as well as their writing skills.',
            more: 'Every type of user, every occasion'
        },
        {
            logo: './images/organizationPage/search.svg',
            title: 'Plagiarism detection doesn’t need to be complicated. We offer a simple, intuitive, and easy-to-understand software tool that is fully automated and runs according to the user’s creative inputs, delivering a thorough analysis of the originality of your student’s work.',
            more: 'Simple solutions at your fingertips'
        },
        {
            logo: './images/organizationPage/hand.svg',
            title: 'Drillbit’s plagiarism scanner is easy to use and runs seamlessly with low internet speeds and older hardware, making it a truly global platform.',
            more: 'Always available, always accessible'
        },
    ],
    organizationSubsectionTitle: 'organization_subsection_title',
    imgSubSection: './images/organizationPage/organizationSubSection.svg',
    organizationSubsectionImage: [
        {
            image: './images/organizationPage/Ai.svg',
            title: 'AI-based matching algorithm',
            subtitle: 'Our AI algorithm learns as it goes to provide to offer a highly customized service.'
        },
        {
            image: './images/organizationPage/Find-text.svg',
            title: 'API Integration',
            subtitle: 'We offer seamless API integration to use on other platforms, negating the need for multiple log-ins.'
        },
        {
            image: './images/organizationPage/quick.svg',
            title: 'Quick and accurate results',
            subtitle: 'We give results in seconds.'
        },
        {
            image: './images/organizationPage/PrivateStorage.svg',
            title: 'Private storage space',
            subtitle: 'A private place in the cloud to store student’s work and simultaneously check for plagiarism'
        }
    ]
};



export const instituteData = {
    id: 'institute',
    showTitle: false,
    inverse: true,
    bigImage: true,
    btnShow: true,
    type: 'Institution',
    fontSize: '2.75rem',
    headline: 'institute_headline',
    description: 'institute_description',
    buttonLabel: 'Request Demo',
    imgStart: 'start',
    img: './images/organizationPage/organization.svg',
    start: 'true',
    organizationTitle: 'institute_title',
    organizationList: [
        {
            logo: './images/institution/easy.svg',
            title: 'Our plagiarism scanner integrates effortlessly into your academic software. Allow us to show you how.',
            more: 'Easy to integrate, easy to navigate'
        },
        {
            logo: './images/institution/cloud.svg',
            title: 'Private data should remain private. DrillBit ensures that is the case by taking meticulous care in ensuring all data we process never falls into unauthorized hands. We adhere strictly to the com-pliancy rules of FERPA, COPPA, and GDPR.',
            more: 'Keeping your personal data personal'
        },
        {
            logo: './images/institution/graph.svg',
            title: 'Cloud hosting allows DrillBit to be on 24/7, even during high load times with a near 100% up-time.',
            more: 'Our plagiarism prevention never sleeps, even when you do'
        },
        {
            logo: './images/institution/hand.svg',
            title: 'Drillbit’s plagiarism scanner is easy to use and runs seamlessly with low internet speeds and older hardware, making it a truly global platform.',
            more: 'Always available, always accessible'
        },
    ],
    organizationSubsectionTitle: 'institute_subsection_title',
    imgSubSection: './images/organizationPage/organizationSubSection.svg',
    organizationSubsectionImage: [
        {
            image: './images/institution/cloud.svg',
            title: 'Institution repository',
            subtitle: 'We offer a cloud-based repository that simultaneously checks student’s work for plagiarism.'
        },
        {
            image: './images/institution/lms.svg',
            title: 'LMS & Grammar software integrations',
            subtitle: 'DrillBit integrates seamlessly into remote learning software such as Blackboard, Canvas, Google Classroom, and more...'
        },
        {
            image: './images/institution/search.svg',
            title: 'Exclusions in plagiarism search',
            subtitle: 'DrillBit excludes text from plagiarism detection when the proper credit and citation is given to the original source'
        },
        {
            image: './images/institution/device.svg',
            title: 'Classroom management access',
            subtitle: 'Allows seamless instructor/student interaction as well as a platform for students to submit as assignments.'
        },
        {
            image: './images/institution/file.svg',
            title: 'Detections of manipulated papers',
            subtitle: 'A forensic examination shows the most subtle of alterations from font discrepancies, to copy and paste signifiers and more.'
        }
    ]
};




export const personalData = {
    id: 'personal',
    showTitle: false,
    inverse: true,
    bigImage: true,
    btnShow: true,
    type: 'Personal',
    fontSize: '2.75rem',
    headline: 'personal_headline',
    description: 'personal_description',
    buttonLabel: 'Request Demo',
    imgStart: 'start',
    img: './images/organizationPage/organization.svg',
    start: 'true',
    organizationTitle: 'personal_title',
    organizationList: [
        {
            logo: './images/personal/search.svg',
            title: 'We provide access to nearly 100B live and archived web pages, journals, publishers, articles, conferences papers, thesis and dissertation repositories',
            more: 'Search Accuracy'
        },
        {
            logo: './images/personal/system.svg',
            title: 'You don’t need a Ph.D. to understand our reports, even if you are studying for one. They are ful-ly interactive with clickable sources, great graphics, and more.',
            more: 'Great graphics, fully interactive reports'
        },
        {
            logo: './images/personal/graph.svg',
            title: 'Our scanner is always on, constantly recalculating references and searching for citations.',
            more: 'Always on, real-time calculations'
        },
        {
            logo: './images/personal/security.svg',
            title: 'DrillBit adheres to the strictest security protocols.',
            more: 'Your privacy is our priority'
        },
    ],
    organizationSubsectionTitle: 'personal_subsection_title',
    imgSubSection: './images/organizationPage/organizationSubSection.svg',
    organizationSubsectionImage: [
        {
            image: './images/personal/Ai.svg',
            title: 'Advanced AI & ML Technologies',
            subtitle: 'DrillBit uses cutting edge AI and ML technology to produce outstanding results'
        },
        {
            image: './images/personal/PersonalRepository.svg',
            title: 'Personal Repository',
            subtitle: 'Cloud-based storage for personal use, allowing blog writers, students, research writers, and more to have their work continually checked for similarities and possible plagiarism against other works while it is being stored'
        },
        {
            image: './images/personal/Userfriendlyinterface.svg',
            title: 'User-friendly interface',
            subtitle: 'Our interface is easy to use, understand and integrate'
        },
        {
            image: './images/personal/Accurateresults.svg',
            title: 'Accurate results',
            subtitle: 'Clear cut, detailed, and precise results every time'
        },
        {
            image: './images/personal/Group.svg',
            title: 'Affordable price',
            subtitle: 'Scalable for any budget'
        }
    ]
};



export const FAQData = {
    id: 'faq',
    showTitle: false,
    inverse: true,
    bigImage: true,
    fontSize: '2.75rem',
    btnShow: false,
    headline: 'faq_headline',
    description: 'faq_description',
    imgStart: 'start',
    img: './images/faq/faqImage.svg',
    start: 'true',
    faqTitle: 'faq_title',
    faqList: [
        {
            title: 'Products',
            list: [
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'Which file formats/types does DrillBit support?',
                    anwser: 'DrillBit supports various file formats like PDF, DOC, DOCX, TXT, HTML, HTM, DOTX, ODT, PPTX, XLSX, RTF, TIFF.'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'How many pages and file size allowed in each document?',
                    anwser: 'Each document is allowed up to 400 pages and 100 MB file size.'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'Does DrillBit Supports Plagiarism check in regional languages?',
                    anwser: 'Yes, DrillBit supports plagiarism check in regional languages. Kannada, Hindi, Urdu, Telugu, Tamil, Malayalam, Punjabi, Bengali, Marathi, Assamese, Gujarati, Sanskrit, Kashmiri, Maithili, Manipuri, Oriya, Punjabi, Bengali'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'which fonts are supported for regional languages?',
                    anwser: 'There are no restrictions on Fonts, all fonts are supported in MS word file format.'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'Is there a free trial access available for institutions?',
                    anwser: 'Yes, 7-days free trial access available with restricted document checks'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'Does DrillBit save the submitted files in the repository/database automatically?',
                    anwser: 'No, DrillBit will not save any files to the repository. Users can check the same files many times, but it will not be saved in the Repository.'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'How do I remove the file which is saved in the DrillBit repository?',
                    anwser: 'The users can request to remove the files from the repository Inbox, which is accessible to all users or contact your admin user of the license or write a mail to support@drillbitplagiarism.com with paper id.'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'Does DrillBit covers premium Publisher’s content?',
                    anwser: 'Yes, it covers all the major premium Publisher content in plagiarism search.'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'Is DrillBit approved by UGC or AICTE?',
                    anwser: 'UGC/AICTE will not approve any software or promote any brands. Governing bodies make policy to use plagiarism software in the Institution.'
                }
            ]

        },
        {
            title: 'General',
            list: [
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'How can I get my login credentials or where do I sign up for personal use?',
                    anwser: 'This is a subscription based, you should purchase login credentials to access the software. For 10 submissions/checks up to 200 pages each, one year subscription period. Please make payment of INR 3000 or $40 USD from “online payment” page in the footer and send payment reference number, Name, and email id to the support@drillbitplagiarism.com. Support team will send login credentials within an hour'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'Can I check plagiarism of my document without signup or login credentials?',
                    anwser: 'Yes, click on the “online payment” page in the footer and follow instructions. Please make payment and send payment screenshots and documents to the support@drillbitplagiarism.com. Support team will return within an hour.'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'Why does it say “you do not have enough credits to check plagiarism” when I try to upload a file?',
                    anwser: 'The assigned/allocated documents have been completed, request your admin users to add more documents to your id/account or contact DrillBit Sales team to purchase credits.'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'Can I use this software for free?',
                    anwser: 'No, not offering free checks for personal use'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'Can I download this application?',
                    anwser: 'No, this is a cloud-based application, and you can access it with login credentials like Gmail.'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'My login details are incorrect, or the entered password is incorrect?',
                    anwser: 'Click on the “forgot password” option on login page and reset the password. Or write a mail to support@drillbitplagiarism.com'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'Does Drillbit support Grammar checking?',
                    anwser: 'Yes, Drillbit has integrated grammar tool and it generates a Grammar report as well as a plagiarism report in a single click.'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'What is Doc:Error in DrillBit Plagiarism Detection Software?',
                    anwser: 'DrillBit shows “Doc:Error” instead of plagiarism % for manipulating papers or texts using a variety of tricks to avoid plagiarism %. Authors/Students should remove tricks and submit a paper for plagiarism check.'
                },
                {
                    plusIcon: './images/faq/plus.svg',
                    question: 'How many languages does DrillBit detect?',
                    anwser: 'Currently DrillBit supports 100+ languages, English, Spanish, Vietnamese, Indonesian, German, French, Chinese, and more.'
                }
            ]
        },
        {
            title: 'API & Integrations',
            list: [
                {
                    question: 'Can I access DrillBit plagiarism on Learning Management Systems (LMS)?',
                    anwser: 'Yes, DrillBit is integrated into Moodle, Google classroom, Blackboard, Canvas, Quiklrn, LTI Tools'
                },
                {
                    question: 'Is it possible to integrate DrillBit with the university ERP/platform?',
                    anwser: 'Yes, Drillbit can be integrated into ERP/Platform/library software at free of cost.'
                },
                {
                    question: 'Is it possible to integrate DrillBit login page on our university website?',
                    anwser: 'Yes, please add “Plagiarism check” button on the university website and add the following link https://www.drillbitplagiarismcheck.com/drillbit_new/drillbitlogin.'
                },
                {
                    question: 'Can I collaborate with DrillBit as a content partner?',
                    anwser: 'Yes, any journal or publishers or aggregators or individuals can upload their content on DrillBit Plagiarism checker with MOU to avoid duplication or to protect their content.'
                },
                {
                    question: 'Does DrillBit provide an open API?',
                    anwser: 'Yes, DrillBit has published an open API on website and customers of DrillBit can use it for any type of integrations.'
                }
            ]
        },
        {
            title: 'Analysis / Result / Report Page',
            list: [
                {
                    question: 'How can I exclude sources or similarity % in DrillBit?',
                    anwser: 'Select “option To Exclude/Include Sources” - “Yes” while creating a folder Click on the similarity % to view analysis or result page On the analysis page, sources are listed with similarity %, click on the “Exclude >” button to remove any source. The source will be excluded in a fraction of secs.'
                },
                {
                    question: 'How can I get a Digital Receipt or Certificate of plagiarism check? ',
                    anwser: 'Click on similarity % to view analysis or the result page On the analysis page, Top right-side menu clicks on the “Digital Receipt” Fill the fields which are editable and print certificate of plagiarism check'
                },
                {
                    question: 'Can I exclude References/Bibliography and Quoted works in DrillBit?',
                    anwser: 'Yes, select “Exclude Reference / Bibliography” & “Exclude Quotes” - “Yes” while creating a folder. Software will not consider references and quoted works in plagiarism search.'
                },
                {
                    question: 'How much percentage of quoted works and references/bibliography allowed in DrillBit?',
                    anwser: '<15% of quoted works and no limit on references/bibliography content.'
                },
                {
                    question: 'What did this color signify green, grey, pink, red in plagiarism report?',
                    anwser: 'The similar texts are highlighted in colors for easy identification and rewriting. Each color signifies the source and text are in the same color.'
                }
            ]
        },
    ]
};


export const UserGuideLine = {
    id: 'userGuideLine',
    showTitle: false,
    inverse: true,
    bigImage: true,
    fontSize: '2.75rem',
    btnShow: false,
    headline: 'userguide_headline',
    description: 'userguide_description',
    imgStart: 'start',
    img: './images/userGuide/userGuide.svg',
    start: 'true',
    userGuideLineTitle: 'userguide_line_title',
    userGuideLineSubTitle: 'userGuideLineSubTitle_title',
    userGuideLineDoc: [
        {
            logo: './images/userGuide/pdf.svg',
            title: 'Classroom admin user guide',
            description: 'DrillBit is easy to use, but if you’re in a hurry, our video tutorials and user guides will get you up and running in a jiffy.',
            downloadLink: './userGuide/DrillBit Classroom Admin user guide - 2022.pdf',
            downloadIcon: './images/userGuide/downloadLink.svg'
        },
        {
            logo: './images/userGuide/pdf.svg',
            title: 'Instructor user guide',
            description: 'DrillBit is easy to use, but if you’re in a hurry, our video tutorials and user guides will get you up and running in a jiffy.',
            downloadLink: './userGuide/DrillBit Instructor user guide - 2022.pdf',
            downloadIcon: './images/userGuide/downloadLink.svg'
        },
        {
            logo: './images/userGuide/pdf.svg',
            title: 'Organization admin user guide',
            description: 'DrillBit is easy to use, but if you’re in a hurry, our video tutorials and user guides will get you up and running in a jiffy.',
            downloadLink: './userGuide/DrillBit Organization admin user guide - 2022.pdf',
            downloadIcon: './images/userGuide/downloadLink.svg'
        },
        {
            logo: './images/userGuide/pdf.svg',
            title: 'Organization user guide',
            description: 'DrillBit is easy to use, but if you’re in a hurry, our video tutorials and user guides will get you up and running in a jiffy.',
            downloadLink: './userGuide/DrillBit Organization user guide - 2022.pdf',
            downloadIcon: './images/userGuide/downloadLink.svg'
        },
        {
            logo: './images/userGuide/pdf.svg',
            title: 'Student user guide',
            description: 'DrillBit is easy to use, but if you’re in a hurry, our video tutorials and user guides will get you up and running in a jiffy.',
            downloadLink: './userGuide/DrillBit Student user guide - 2022.pdf',
            downloadIcon: './images/userGuide/downloadLink.svg'
        },
    ]
};

export const AboutUsData = {
    id: 'aboutUs',
    showTitle: false,
    inverse: true,
    bigImage: true,
    fontSize: '2.75rem',
    btnShow: true,
    headline: 'about_us_headline',
    description: 'about_us_description',
    imgStart: 'start',
    img: './images/aboutUs/about.svg',
    buttonLabel: 'Know More',
    data: [
        {
            icon: './images/aboutUs/Group-1.svg',
            title: 'Who we are',
            subTitle: 'A tight-knit team of masters degree and Ph.D. graduates in computer science, now in year five of a mission to end plagiarism'
        },
        {
            icon: './images/aboutUs/Group-1.svg',
            title: 'What we do',
            subTitle: 'We dedicate each day to crafting the best plagiarism checking software on the planet in the hope that we can cultivate higher ethical standards and inspire creativity and originality.'
        },
        {
            icon: './images/aboutUs/Group-1.svg',
            title: 'Our Vision',
            subTitle: 'To outperform ourselves daily in creating the gold standard for plagiarism detection software.'
        },
        {
            icon: './images/aboutUs/Group-1.svg',
            title: 'Our Mission',
            subTitle: 'To raise the bar for plagiarism detection and in doing so help cultivate creativity, originality, and new ideas in tomorrow’s thought leaders.'
        }
    ]
};

export const NewsBlogData = {
    id: 'newBlog',
    showTitle: false,
    inverse: true,
    bigImage: true,
    fontSize: '2.75rem',
    btnShow: true,
    headline: 'news_blog_headline',
    description: 'news_blog_description',
    imgStart: 'start',
    img: './images/newsBlog/blog.svg',
    buttonLabel: 'Know More',
    blogTitle: 'blog_title',
    blogs: [
        {
            img: './images/newsBlog/img/1.png',
            title: 'Plagiarism and policies in Indian academic institutions',
            subTitle: 'The University Grant Commission - UGC of India, the Government of India adopted a new regulation within it, titled, “Promotion of Academic Integrity and Prevention of Plagiarism in Higher Educational Institutions”. On 18th July, 2018, a document was published in The Gazette of India that threw light on the exact definition of plagiarism and how to solve the issue.',
            morePath:''
        },
        {
            img: './images/newsBlog/img/2.png',
            title: 'Online academic pursuits vs plagiarism',
            subTitle: 'The pandemic has brought unimaginable changes into all our lives and the academic forefront is not exceptional. Shifting of academic activities posed new challenges to academic institution in upholding academic ethics. Sophisticated plagiarism detection software assist in detecting the plagiarized text.',
            morePath:''
        },
        {
            img: './images/newsBlog/img/3.png',
            title: 'How to handle plagiarism in website',
            subTitle: 'In the recent times, everything is available on the internet and almost every website wants to stand out in one way or the other. Website plagiarism is a very common crime and often not regulated. There are times when entire website content is duplicated, without a single mis-match and sometimes above 90% of the content is copied.',
            morePath:''
        },
        {
            img: './images/newsBlog/img/4.png',
            title: 'Common ways to check for plagiarism',
            subTitle: 'Every individual has a uniqueness in their style of writing, which can be deciphered by looking at their previous works. From writing style to the font, spacing to a mix up in the margin, these show that there has been a variation in the writing and a possible plagiarism threat.',
            morePath:''
        },
        {
            img: './images/newsBlog/img/6.png',
            title: 'Benefits of using an efficient plagiarism detector',
            subTitle: 'Be it a university research paper, or a corporate presentation, drafting the right content comes with a lot of precision and care. Here are the benefits of using a good plagiarism detection software for your business, personal or educational needs.',
            morePath:''
        },
        {
            img: './images/newsBlog/img/5.png',
            title: 'How can academic institutions uphold intellectual ethics',
            subTitle: 'The foundation of a good education system lies in harboring diligence, good ethics and fostering learning in the minds of their students. Timely training can be made available to the staff and students to help mitigate any foreseeable risks that may arise and threaten the research and academic integrity.',
            morePath:''
        },
        {
            img: './images/newsBlog/img/7.png',
            title: 'Plagiarized text can ruin your Content Strategy!',
            subTitle: 'Content marketing strategy or even the basic content creation strategy revolves around originality, uniqueness of content and schematic deployment of marketing creatives. Here are some of the mistakes to avoid while creating your company’s content strategy.',
            morePath:''
        },
        {
            img: './images/newsBlog/img/8.png',
            title: 'Research ethics and Plagiarism',
            subTitle: 'The University Grants Commission Of India (UGC) has made it mandatory for PhD students to learn about research ethics and plagiarism. Under research ethics, the syllabus defines what fabrication of content is. It goes on to talk about falsification, intellectual honesty and plagiarism.',
            morePath:''        
        },
        {
            img: './images/newsBlog/img/9.png',
            title: 'All 5 TSCs achieved by DrillBit',
            subTitle: 'DrillBit Plagiarism software is now SOC 2 (TYPE 2) certified for all 5 TSCs (Security, Availability, Confidentiality, Processing Integrity & Privacy). We’re delighted to announce that DrillBit plagiarism detection software has achieved a SOC 2 (TYPE 2) certification, a rigorous international certification demonstrating our commitment to maintaining and protecting information security.',
            morePath:'/more-blog'
        }
    ],
    twitterImg: './images/twitterFeed/twitter.svg',
    twitterTitle: '#twitter feeds',
    twitterSubTitle: 'Tweet by @Drillbitcorp',
    drillbitLogo: './images/twitterFeed/drillbit-logo.svg',
    twitcontent: 'On Tuesday, we worked directly with General Motors to bring the new #Corvette #Z06 announcement LIVE to  dealerships around the country via Drillbit’s Connected Digital Displays. Proud to have been able to fulfill this request and our dealer partners loved it too.',
    twitterImges: './images/twitterFeed/person.svg',
    newsEvent: [
        {
            title: 'News Stories',
            subtitle: 'UGC considers scrapping rule on publishing research for PhD.',
            arrowIcon: './images/twitterFeed/arrow.svg',
            link:'https://www.hindustantimes.com/india-news/ugc-considers-scrapping-rule-on-publishing-research-for-phd-101653503189014.html'
        },
        {
            title: 'News Stories',
            subtitle: 'Promotion of academic integrity and prevention of plagiarism in higher educational institutions.',
            arrowIcon: './images/twitterFeed/arrow.svg',
            link:'https://www.ugc.ac.in/pdfnews/7771545_academic-integrity-Regulation2018.pdf'
        },
        {
            title: 'News Stories',
            subtitle: 'Promotion of academic integrity and excellence and Prevention of Plagiarism.',
            arrowIcon: './images/twitterFeed/arrow.svg',
            link:'https://www.aicte-india.org/content/promotion-academic-integrity-and-excellence-and-prevention-plagiarism'
        }
    ]
};

export const CustomerHepData = {
    id: 'customerHelp',
    showTitle: false,
    inverse: true,
    bigImage: true,
    fontSize: '2.75rem',
    headline: 'privacy_policy_title',
    description: 'privacy_policy_description',
    imgStart: 'start',
    img: './images/customerHelp/privacy-policy.svg',
    privacyAboutTitle: 'privacy_about_title',
    privacyApplicability: 'privacy_applicability',
    privacyDefinitions: 'privacy_definitions',
    privacyConsent: 'privacy_consent',
    privacyPolicyDescription: 'At DrillBit, we are strongly committed and striveto improve the academic standards, integrity and healthy educational practices.'
        + 'DrillBit Anti-Plagiarism Software provides services to academic and educational institutes, one of our main priorities is to protect the privacy of our subscribers and data fed into DrillBitsystem.'
        + 'DrillBit Privacy Policy encompasses the method of collection and category of data (including the personal data), utilisation of the collected data and the measures adopted to protect personal data provided by the Subscribers.Privacy being of utmost concern, DrillBit ensures to update its systems and servers from time to time, using the most advanced technology.',
    privacyApplicabilityDesc: 'This Policy is applicable to all the subscribers which shall mean and include such individuals or businessesusing our website/s and to those who are willingly providing such data.',
    privacyDefinitionsData: [
        'Child shall mean and include any natural person who has not attained the age of majority, as may be prescribed.',
        'Consent of the data subject means any freely given, specific, informed and unambiguous indication of the data subject’s wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her;',
        'Dataincludes a representation of information, facts, concepts, opinions or instructions in a manner suitable for communication, interpretation or processing by humans or by automated means',
        'Erasure shall mean and include the right to be erased or right to be forgotten.',
        'Personal data, shall mean any information relating to an identified or identifiable natural person (data subject); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person',
        'Processing means any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction',
        'Subscribershall mean such person/s including the natural and juristic person who is opting for the services of DrillBit Anti Plagiarism Software.'
    ],
    privacyConsentData: [
        'By accessing services provided by the DrillBit website/s, and also by providing personal data, the subscriber shall authorise DrillBit to use the personal data forprocessing such data for the purpose of providing services. DrillBit ensures to procure consent from the subscribers for various services offered.',
        'The subscribers shall use their discretion while using the website/s of DrillBit, or may refrain from using the website/s of DrillBit.'
    ],
    privacyCollectionTitle: 'privacy_collection_data',
    privacyCollectionData: [
        'Accessing services on our website/s shall entail DrillBit to collect data which shall be used for providing services as sought by the subscriber. Filling up of any form seeking personal data shall be at the absolute discretion of the subscriber, for the purpose of accessing the services offered by DrillBit.',
        'DrillBit shall intimate the subscriber, the reason for collecting the data. Any additional data provided by the subscriber including the name, email address, phone number,address of the company, or any other details the contents of the message and/or attachments may be provided at the discretion of the subscriber.',
        'Collection of Data by DrillBit shall be, for providing the best user experience to subscribers and for administering the requirements of each subscriber. The Subscriber however, may choose to opt out of services by requesting DrillBit for option to opt out.',
        'Collection of data by DrillBit shall be solely for the purpose intended in the usage of the software and it shall not imply or mean that the personal data of any subscriber shall be used for any other reason than for processing such data.'
    ],
    privacyCookiesTitle: 'privacy_cookies_title',
    privacyCookiesData: [
        'DrillBit also uses cookies and other similar technologies, on the website/s and using of such cookies for the purpose of accessing location, preferences and other details, may be considered as processing of personal data.',
        'DrillBit may use the cookies and other similar technology for improving the services provided to the subscriber, any personal data of the subscriber shall be maintained with utmost care and diligence.',
        'DrillBit shall seek permission of the subscriber prior to sending any promotional messages or mails. Subscriber may however, choose not to receive any messages, mails or calls from DrillBit.'
    ],
    privacyUsageTitle: 'privacy_usage_title',
    privacyUsageData: [
        'To ensure academic integrity and to promote healthy educational practises, some features to recognise and prevent the educational malpractices and protect intellectual property of the creators.',
        'To provide with services to the subscribers relating to the similarity index or related results based on the comparison of the data available on the DrillBit servers.',
        'To provide with the services to subscribers, including the customer support services, which may requireaccess to data and information of the subscriber.',
        'To manage DrillBit services, the data collected is utilised for the purpose of internal analysis for the purpose of monitoring, maintaining and improving the services and other features related to the usage of DrillBit. Furthermore, to improve, personalise and expand features of DrillBit.',
        'To provide with creation of account and process relating to the authentication of the logged in subscribers.',
        'To establish communication channels with the subscribers, either directly or through our related services, for providing better features, updates and other information relating to services and products of DrillBit.',
        'To prevent any illegal or potentially threatening activities.',
        'To enforce the DrillBit Terms of Use.'
    ],
    privacyComplicance: 'privacy_compliance',
    privacyComplicanceData: [
        'DrillBit is Compliant to the European Data Protection Compliance i.e. GDPR,various data protection legislations of the United States of America and based on the industry set standards in India.',
        'DrillBit is always committed and in pursuit of providing customer satisfaction with utmost ethics and integrity.',
        'DrillBit ensures that the data of the Subscriber is not used or misused, for any other purpose than what was originally intended.',
        'DrillBit ensures to implement the best technology and practises for data protection of subscribers and persons using the website/s.',
        'DillBit’s contract with any third-party service provider, for any other services shall strictly observe and implement the standards as adapted by DrillBit.',
        'DrillBit is sensitive and observes diligence in the data that is processed, hence any data apart from what is submitted by subscribers relating to children below the age of twelve,shall not be collected for any other purpose than what isrequired for the business. There shall be strict filtering mechanism wherein inappropriate data shall not be received, handled or stored at any point of time.',
        'DrillBit shall intimate the Subscribers of the changes to be introduced in the Privacy Policy, based on the change in laws, or any policy in order to ensure and abide by the privacy policies of various countries.Privacy Policy may be revised from time to time.'
    ],
    privacyDocumentation: 'privacy_documentation',
    privacyDocumentationData: [
        'DrillBit follows a standard procedure of documentation. The purpose of documentation is to keep a record of the visitors visiting website/s. The documentation will be maintained to ensure that the website/s hosting visitors as a part of analytics.',
        'Documentation shall include collection of data like date and time stamp, Internet Protocol (IP) address/es, Type of browser used, Internet Service Provider (ISP) and other relevant data but not personal data.',
        'In order to keep up with the growing competition, DrillBit analyses the trends by administering the website/s, gathering demographic details and other services for providing qualitative services to the subscribers.'
    ],
    privacyDataHandling: 'privacy_data_handling_title',
    privacyDataHandlingData: [
        'DrillBit facilitates its subscribers and provides with the right to change, update, modify or remove the personal data of the subscribers from DrillBit database.',
        'Any subscriber intending to change, update, modify, remove, deleteor seeking for a clarification regarding the personal data or its usage, shall raise a request with DrillBit at the Contact Form mentioned in the website.',
        'DrillBit ensures to comply with the guidelines specified by each country and in this respect, several measures have been adopted to ensure the data integrity is maintained.',
        'In case of transfer in business including amalgamation, mergers or transfer, the Privacy policy shall continue and subscriber data shall be protected as provided under this policy.'
    ],
    privacyDispute: 'privacy_dispute_title',
    privacyDisputeDesc: 'For the purpose of providing effective services, DrillBit may store, process and transmit data from one jurisdiction to other including the locations outside the place of subscriber. Any subscriber having issues or complaints regarding the handling of data by DrillBit shall inform and intimate DrillBit at support@drillbitplagiairsm.com, any dispute pertaining to the data handling, management and issues thereof shall be settled by way of Arbitration or Mediation.Governing law for dispute resolution shall be that of India.',
    privacyFeedback: 'Feedback and contact information',
    privacyFeedbackDesc: 'Subscribers may feel free to provide feedback and raise Any queries or in case of requirement of additional information, about the Privacy Policy, kindly contact support@drillbitplagiarism.com',
    privacyEuropeContact: 'European union representative',
    privacyEuropeContactDetail: 'Name: Walter Kny, Email id: walterkny@gmail.com',
    privacyContactUs: 'Contact Us',
    privacyContactDetail: 'If you have any questions about our Policy, please contact us at support@drillbitplagiarism.com'
};

export const CookiePolicyData = {
    id: 'cookiePolicy',
    showTitle: false,
    inverse: true,
    bigImage: true,
    fontSize: '2.75rem',
    headline: 'cookie_policy_title',
    description: 'privacy_policy_description',
    imgStart: 'start',
    img: './images/customerHelp/privacy-policy.svg',
    privacyAboutTitle: 'cookie_what_are_cookies',
    privacyApplicability: '',
    privacyDefinitions: 'cookie_how_use_cookies',
    privacyConsent: 'cookie_types',
    privacyPolicyDescription: 'Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to enable websites to function or to improve their performance, as well as to provide information to the website owners.',
    privacyDefinitionsData: [
        'To provide you with a better user experience: Cookies allow us to remember your preferences, such as your language or font size, so that you do not have to reset them each time you visit our website.',
        'To analyze and improve our website’s performance: Cookies help us understand how visitors use our website, which pages are popular, and how we can improve the overall user experience.',
        'To provide targeted advertising: We may use cookies to display advertisements that are relevant to you based on your browsing history and interests.'
    ],
    privacyConsentData: [
        'Session Cookies: These cookies are temporary and are deleted when you close your browser. They are used to enable certain website features and to provide a seamless browsing experience.',
        'Persistent Cookies: These cookies remain on your device after you close your browser and are used to remember your preferences and improve your user experience on our website.'
    ],
    privacyCollectionTitle: '',
    privacyCollectionData: [],
    privacyCookiesTitle: '',
    privacyCookiesData: [],
    privacyUsageTitle: '',
    privacyUsageData: [],
    privacyComplicance: '',
    privacyComplicanceData: [],
    privacyDocumentation: '',
    privacyDocumentationData: [],
    privacyDataHandling: '',
    privacyDataHandlingData: [],
    privacyDispute: 'cookie_third_party',
    privacyDisputeDesc: 'We may also use third-party cookies on our website, which are cookies that are set by a domain other than our website. Third-party cookies may be used for a variety of purposes, including analytics, advertising, and social media.',
    privacyFeedback: 'Your Options',
    privacyFeedbackDesc: 'Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies or to alert you when a cookie is being placed on your device. However, please note that some website features may not function properly without cookies.',
    privacyEuropeContact: 'Changes to this Policy',
    privacyEuropeContactDetail: 'We may update this Cookies Policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically.',
    privacyContactUs: 'Contact Us',
    privacyContactDetail: 'If you have any questions about our Cookies Policy, please contact us at support@drillbitplagiarism.com'
};

export const TermsConditionData = {
    id: 'termsCondition',
    showTitle: false,
    inverse: true,
    bigImage: true,
    fontSize: '2.75rem',
    headline: 'terms_title_condition',
    description: 'terms_condition_sub_title',
    imgStart: 'start',
    img: './images/customerHelp/terms-condition.svg',
    privacyAboutTitle: 'drillbit_services_title',
    privacyApplicability: 'drillbit_services_title',
    privacyDefinitions: 'interpretation',
    scope: 'scope',
    limitationLiability: 'limit_liability',
    termsLimitLiabilityDesc: 'limit_liability_description',
    application: 'terms_condition_application',
    applicationDescription: 'terms_condition_description',
    showLimitLiability: true,
    termsConditionScope: [
        'DrillBit Anti Plagiarism Software offers various services for its Subscribers and primarily in field of maintaining academic standards and integrity, which includes the plagiarism detection for documents uploaded by the Subscribers, identifying similarity index by comparing and matching it with the resource available with DrillBit including the resources obtained by licenses from third party vendors,available internet sources and other databases to which DrillBit has access.',
        'Subscribers shall be bound by the terms of use and conditions as laid down by DrillBit comprising of the Privacy Policy, which may be updated from time to time.',
        'Subscription services shall be limited to the schemes or plans opted by the Subscribers. Services shall be limited to what is offered by DrillBit and it shall not entitle Subscribers to claim over and above what has been subscribed to by the Subscribers.',
        'Services of DrillBit shall be limited to the period of subscription based on the schemes or plans opted by the Subscribers, and it shall not entitle subscriber to seek for extended period of usage of services offered by DrillBit.',
        'Subscriber may at any point of time opt out of the services offered by DrillBit and there shall no financial implication on DrillBit, or seeking for a refund of the amount paid by the Subscriber, at the time of opting of subscription.'
    ],
    limitationOfLiability: 'Limitation of liability',
    termsConditionLimitationLiability: [
        'DrillBit shall not be liable for any kind of damages whatsoever arising out of the use of services offered, as the services shall be provided on what is available with the DrillBit or is updated at a subsequent point in time.',
        'Subscriber shall not have any claim against DrillBit for any indirect losses, loss of profits, loss of revenue or any kind of anticipation of loss in the business or any other transactions arising out of the usage directly or remotely of the services offered by DrillBit.',
        'Liability of DrillBit shall be restricted only to transactions wherein the negligence is prima facie and not remote to the cause of any damages suffered by the Subscriber and any claim arising thereof shall be limited to the amount paid by the subscriber towards the subscription of services offered by DrillBit.',
        'DrillBit shall not accept any liability whatsoever for any consequences faced by Subscriber due to misuse of DrillBit Reports andshall not guarantee or entitle Subscriber for any kind of claims against DrillBit.',
        'DrillBit shall not be liable for any loss or damages arising out of the consequences which has arose out of the control of DrillBit i.e., force majeure or vis majorincluding outbreak of an epidemic affecting the functioning of DrillBit, War or war like situations, shutting down of internet or any server/s, any law or legislations,fire, lightning, or those situations beyond and out of DrillBit’s management and control.',
        'DrillBit shall not be responsible for any loss of data or personal information over which DrillBit does not have any control to protect and more specifically over the Internet, as the operation of Internet is not completely within the DrillBit’scontrol and are susceptible to several unpleasant scenarios including the hacking, virus, malwares, trojans, worms, ransomwares and other forms of attacks.'
    ],
    intellectualProperty: 'Intellectual property limitation',
    intellectualPropertyData: [
        'DrillBit has utmost respect and concern for Intellectual Property more so for the Copyright protection of the authors. Therefore, Intellectual property protection shall be amongst the highest priority for DrillBit.',
        'Any document uploaded by the Subscriber for using the services of DrillBit shall be for preventing any kind of infringement of intellectual property in the form of plagiarism.',
        'Subscriber shall assign the right of using the material uploaded on DrillBit for archiving the material uploaded and for further use of the material uploaded by Subscriber.',
        'DrillBit ensures that the content uploaded by the Subscriber shall be maintained confidential and shall not be shared to the prejudice of the Subscriber. DrillBit upon request from the Subscriber shall delete the content uploaded and such request for deletion shall be from such person/s as may be authorised and DrillBit shall reserve the right to verify the requests for deletion of content uploaded.',
        'DrillBit does not claim ownership of any document uploaded on the DrillBit servers and it shall be used only for the purposes of comparing and identifying the similarity in any document uploaded by the Subscriber.',
        'DrillBit does not use the content uploaded by the Subscriber for any other purpose than for providing highest quality of service to the Subscriber and to ensure authenticity and to prevent plagiarism.'
    ],
    terminationOfSubscription: 'Termination of subscription',
    terminationOfSubscriptionData: [
        'DrillBit may withdraw, terminate or suspend the usage of any of the services or part thereof, if DrillBit is of the opinion that the commercial viability of services would be against the interest of DrillBit.',
        ' DrillBit may withdraw, terminate or suspend the usage of any of the services or part thereof, as offered by DrillBit in case -'
        + '1). The subscriber is found to be in material breach of any clause mentioned herein.'
        + '2). Of compliance of any order of Court/Tribunal or any Government authority.'
        + '3). DrillBit believes that the Subscriber’s conduct is damaging or harming the usage, reputation or for any other reason that DrillBit finds to be prejudicial to its interest.',
        'DrillBit shall notify the Subscriber for withdrawing, terminating or suspendingthe subscription and such withdrawal, termination or suspension shall carry a reason.If DrillBit believes that such withdrawal, suspension or termination is necessary, DrillBit may do so without any notice whatsoever.',
        'Effect of withdrawal, termination or suspension shall mean and imply that the subscriber shall not have access to any of the services or part thereof, offered by DrillBit and such aggrieved subscriber shall intimate and notify DrillBit at support@drillbitplagiarism.comappealing for restoration of services on various grounds, and DrillBit may consider such grounds raised by aggrieved subscriber and may restore the Subscription upon satisfaction and only upon finding the reasons appropriate.'
    ],
    disputeResolutionJurisdiction: 'Dispute resolution and jurisdiction',
    disputeResolutionJurisdictionData: [
        'Any subscriber having issues or complaints regarding the interpretation and implementation of DrillBit Terms of Use and Conditions shall inform and intimate DrillBit at Support@drillbitplagiarism.com any dispute pertaining to the data handling, management and issues thereof shall be settled by way of Arbitration or Mediation. Governing law for dispute resolution shall be that of India.',
    ],
};


export const PaymentData = {
    id: 'payment',
    showTitle: false,
    inverse: true,
    bigImage: true,
    fontSize: '2.75rem',
    headline: 'payment_headline',
    description: 'payment_sub_title',
    payment_title: 'payment_title',
    imgStart: 'start',
    img: './images/payment/payment.svg',
    paymentSteps: [
        {
            step: 1,
            title: 'Make Online Payment (The price is for one time check for one file upto 200 pages)'
        },
        {
            step: 2,
            title: 'Send the file to support@drillbitplagiarism.com with payment receipt or screenshot.'
        },
        {
            step: 3,
            title: 'DrillBit team will check and send the plagiarism report.'
        }
    ],
    paymentCard: [
        {
            step: 1,
            title: 'Special price for Students within India',
            price: '₹ 590 ',
            subTitle: 'For Online Payment (Indian Users)',
            buttonLabel: 'Pay now',
            payLink: 'https://pmny.in/eIYTQy0mtfMT',
            gst: '(Inclusive of GST 18%)',
            icon: './images/payment/payU.svg'
        },
        {
            step: 2,
            title: 'Special price for Students outside India',
            price: '$ 10 ',
            subTitle: 'For Online Payment (Foreign Users)',
            buttonLabel: 'Know more',
            payLink: 'https://pages.razorpay.com/pl_Ey7xy3Rz10Hi46/view',
            gst: '(Inclusive of all Taxes)',
            icon: './images/payment/razorpay.jpg'
        }
    ],
};


export const ContactUsData = {
    id: 'contact',
    showTitle: false,
    inverse: true,
    bigImage: true,
    fontSize: '2.75rem',
    headline: 'contact_headline',
    description: 'contact_sub_title',
    imgStart: 'start',
    img: './images/contactus/contact.svg',
    mailIcon: './images/contactus/mail.svg',
    phoneIcon: './images/contactus/phone.svg',
    addrsIcon: './images/contactus/india-gate.svg',
    visitingAddrs: 'visiting_address_label',
    contactAdds: 'contact_label',
};


export const testimonialData = {
    id: 'testimonial',
    showTitle: false,
    inverse: true,
    bigImage: true,
    fontSize: '2.25rem',
    leftArrow: './images/testimonial/leftArrow.svg',
    divider: './images/testimonial/divider.svg',
    rightArrow: './images/testimonial/rightArrow.svg',
    headline: 'Feedback from our valued customers',
    description: 'Testimonials',
    imgStart: 'start',
    review: [
        {
            description: 'Drillbit plagiarism tool procured two years back by K L Deemed to be University (NAAC A++, Grade 1 Category) and using for several activities like bachelors degree Thesis, Masters Degree Thesis, Ph.D Degree Thesis, and Research publications, etc. The accuracy of this tool to detect the plagiarism is remarkable and considerable when compared with existing pioneers like Turnitin, Urkund, and ithenticate, etc. We are satisfied with the performance of this tool and using the grammar checking option also for research publications submissions.',
            img: './images/testimonial/1.png',
            name: 'Dr. B T P Madhav',
            qualification: 'M.Tech., Ph. D., MBA(HR)',
            designation: 'Professor & Associate Dean (Academic Research)',
            orgName: 'K L Deemed to be University (NAAC A++, Grade 1 Category)',
        },
        {
            description: 'There has always been a thrust for Plagiarism tool of indigenous nature to ensure quality that meets requisite standard and to my experience of using varied Anti-Plagiarism Tools, I am indeed thrilled to see the Compatibility of Drillbit Plagiarism software imbibed with all the significant features, has excellent regional language testing and its ease of user friendliness, makes it unique in the academic environment.',
            img: './images/testimonial/2.png',
            name: 'Dr. Suresh Jange',
            qualification: '',
            designation: 'University Librarian & NAAC Coordinator, IFLA & Commonwealth Professional Fellow',
            orgName: 'Gulbarga University, Karnataka, India',
        },
        {
            description: 'We, Vidyalankar Institute of Technology, Mumbai,  are demanding excellence and Quality offering to academics. Drillbits has helped us accomplish our mission of quality drive in academic writing. Their plagiarism software is a very useful tool for our students and faculty members for achieving the best international standard of publication.',
            img: './images/testimonial/3.png',
            name: 'Dr. Saurabh Mehta',
            qualification: '',
            designation: 'Chief Academic Officer & Professor',
            orgName: 'Vidyalankar Institute of Technology, Mumbai, India',
        },
        {
            description: 'We have been utilising DrillBit Plagiarism Detection Software for a few years now, and our students, research scholars, and faculty members have found it to be quite helpful in preventing plagiarism and maintaining academic integrity in our business. DrillBit Plagiarism Detection Software plays a critical function for students and instructors in accordance with ICAR Guidelines and in the development of academic integrity.',
            img: './images/testimonial/4.png',
            name: 'Prof. Atul B.Deshmukh',
            qualification: '',
            designation: 'University Librarian',
            orgName: 'Mahatma Phule Krishi Vidyapeeth, Maharashtra, India',
        },
        {
            description: 'DrillBits cutting edge plagiarism software is razor sharp and lightening fast in detecting text similarities.',
            img: './images/testimonial/Jeff.jpeg',
            name: 'Jeff vee',
            qualification: '',
            designation: 'Content writer',
            orgName: 'United States',
        },
    ]
};


export const openApi = {
    id: 'openapi',
    showTitle: false,
    inverse: true,
    bigImage: true,
    fontSize: '2.25rem',
    divider: './images/testimonial/divider.svg',
    headline: 'DrillBit API Overview',
    description: 'DrillBit API is a service to check plagiarism, this guide helps to integrate in a convenient way. If you have any prior knowledge of the REST services, it would be easy to start with integrations.',
    imgStart: 'start',
    menuLeftData: [
        {
            title: 'INTRODUCTION',
            subLink: [
                'Allowed HTTPs requests',
                'Header',
                'Description Of Usual Server Responses',
                'Authorization and Authentication',
                'Create folder',
                'Update folder',
                'Submission',
                'Submission details',
                'Delete submission',
                'Submission list',
                'Download report'
            ]
        }
    ],
    systemEntityData: [
        {
            title: 'Authentication',
            subLink: [
                'Generate Token'
            ]
        },
        {
            title: 'Submissions',
            subLink: [
                'File Submissions',
                'Get Submission details',
                'File Deletion',
                'Get total file submission details',
                'Downloading file'
            ]
        },
        {
            title: 'Assignment/Folder',
            subLink: [
                'Update Folder settings',
                'Get Assignment details'
            ]
        },
        {
            title: 'Code Samples',
            subLink: [
                'Samples'
            ]
        }
    ],
    allowedHttp: 'Allowed HTTPs requests',
    allowedHttpData: [
        {
            method: 'GET',
            description: 'Requests data from a resource'
        },
        {
            method: 'POST',
            description: 'Submits data to a resource to process'
        },
        {
            method: 'PUT/PATH',
            description: 'Updates a resource'
        },
        {
            method: 'DELETE',
            description: 'Deletes a resource'
        }
    ],
    headerData: [
        {
            method: 'Accept',
            description: 'Must be application_json, since DrillBit leverage JSON API specification'
        },
        {
            method: 'Authorization',
            description: 'Should be Bearer <access_token>. See Authorization and Authentication for more info'
        },
        {
            method: 'Content-Type',
            description: 'Only for requests, that have body. Usually its application_json or multipart/form-data'
        }
    ],
    serverResData: [
        {
            method: '200',
            description: 'OK - Request succeeded. Сlient can read the result of it in the body and the headers of response.'
        },
        {
            method: '202',
            description: 'Accepted - Request is accepted for processing, but the processing has not been completed.'
        },
        {
            method: '401',
            description: 'Unauthorized - Request requires user authentication or, if the request includes authorization credentials, authorization is refused for those credentials.'
        },
        {
            method: '403',
            description: 'Forbidden - The server accepted the request, but is refusing to fulfill it.'
        },
        {
            method: '404',
            description: 'Not Found - The requested resource could not be found.'
        },
        {
            method: '424',
            description: 'Failed Dependency - The request failed because it depended on another one. Usually it means resource is not ready yet.'
        },
        {
            method: '429',
            description: 'Too Many Requests - Rate limiting has been applied.'
        }
    ]
};


export const RegionalData = {
    id: 'personal',
    showTitle: false,
    regionalPadding:true,
    inverse: true,
    bigImage: true,
    btnShow: true,
    trailRegistration:false,
    type: 'Regional languages',
    fontSize: '2.75rem',
    headline: 'Guarding Originality, Empowering Regional Languages',
    description: 'Preserve authenticity with our advanced plagiarism detection software tailored for regional languages',
    buttonLabel: 'Request Demo',
    imgStart: 'start',
    img: './images/organizationPage/regionalBanner.svg',
    start: 'true',
    organizationTitle: 'Empowering Authenticity in Regional Languages',
    organizationList: [
        {
            logo: './images/personal/search.svg',
            title: 'Seamlessly analyze and detect plagiarism in various regional languages',
            more: 'Multilingual Support'
        },
        {
            logo: './images/personal/system.svg',
            title: 'Access an extensive database of regional language resources to enhance plagiarism detection accuracy.',
            more: 'Comprehensive Database'
        },
        {
            logo: './images/personal/graph.svg',
            title: 'Utilize a powerful web crawling mechanism designed to scour regional language websites and documents for potential matches.',
            more: 'Efficient Crawler'
        },
        {
            logo: './images/personal/security.svg',
            title: 'Track and trace original sources of regional language content to validate authenticity',
            more: 'Source Tracking'
        },
    ],
    organizationSubsectionTitle: 'Safeguarding Originality in Regional Content',
    imgSubSection: './images/organizationPage/organizationSubSection.svg',
    organizationSubsectionImage: [
        {
            image: './images/personal/Ai.svg',
            title: 'Detect Plagiarism with Precision',
            subtitle: 'Uphold originality with our precise plagiarism detection for 15 regional languages Hindi, Kannada, Malayalam, Urdu, Sanskrit, Tamil, Telugu, Santali, Sindhi, Oriya, Assamese, Marathi, Punjabi, Gujarati, Bengali.'
        },
        {
            image: './images/personal/PersonalRepository.svg',
            title: 'Compatibility',
            subtitle: 'Support 3000+ fonts using OCR technology and a wide range of file formats – PDF, DOCX, TXT, HTML, PPTX, XLSX, Scanned PDF'
        },
        {
            image: './images/personal/Userfriendlyinterface.svg',
            title: 'Content Coverage',
            subtitle: 'Extensive Coverage of Internet, Journals, and Repositories'
        },
        {
            image: './images/personal/Accurateresults.svg',
            title: 'Repository',
            subtitle: 'Build and curate your own comprehensive repository of regional languages.'
        },
        {
            image: './images/personal/Group.svg',
            title: 'Affordable price',
            subtitle: 'Scalable for any budget'
        }
    ]
};

export const AIDetectionData = {
    id: 'personal',
    showTitle: false,
    regionalPadding:true,
    inverse: true,
    bigImage: true,
    btnShow: true,
    trailRegistration:false,
    type: 'AI Detection',
    fontSize: '2.75rem',
    headline: 'AI-Generated Text Detection',
    description: 'The best solution to detect text generated by ChatGPT and other generative AI writing tools.',
    buttonLabel: 'Request Demo',
    imgStart: 'start',
    img: './images/organizationPage/AiDetection.svg',
    start: 'true',
    organizationTitle: 'Detecting Text Generated by Machines',
    organizationList: [
        {
            logo: './images/personal/search.svg',
            title: 'Achieving unparalleled accuracy in AI content detection',
            more: 'Accuracy'
        },
        {
            logo: './images/personal/system.svg',
            title: 'Addressing false positives in AI detection with precision.',
            more: 'False positive'
        },
        {
            logo: './images/personal/graph.svg',
            title: 'Unlocking the potential of AI text detection through our accessible API, empowering developers to seamlessly integrate advanced content analysis into their applications',
            more: 'AI text detection API'
        },
        {
            logo: './images/personal/security.svg',
            title: 'Integrating seamlessly with the existing workflow, our solution enhances efficiency and accuracy, driving productivity to new heights',
            more: 'Existing workflow'
        },
    ],
    organizationSubsectionTitle: 'DrillBit AI model for accurate generative text detection',
    imgSubSection: './images/organizationPage/organizationSubSection.svg',
    organizationSubsectionImage: [
        {
            image: './images/personal/Ai.svg',
            title: 'Quick Results',
            subtitle: 'Instantaneous AI detection, delivering swift results.'
        },
        {
            image: './images/personal/PersonalRepository.svg',
            title: 'Larger capacity',
            subtitle: 'Expanded AI detection capacity for handling larger volumes'
        },
        {
            image: './images/personal/Userfriendlyinterface.svg',
            title: 'Real time check',
            subtitle: 'Real-time AI detection for instant verification.'
        },
        {
            image: './images/personal/Accurateresults.svg',
            title: 'Integration capability',
            subtitle: 'Our versatile AI detection system is primed for integration across various platforms.'
        },
        {
            image: './images/personal/Group.svg',
            title: 'Affordable price',
            subtitle: 'Scalable for any budget'
        }
    ]
};

export const AICTEData = {
    id: 'AICTE',
    showTitle: false,
    reverse: true,
    btnShow: false,
    lightBg: false,
    isShowAicte: true,
    fontSize: '2.25rem',
    title: 'AICTE',
    headline: 'Empanelment with AICTE NEAT 3.0',
    description: 'DrillBit - Plagiarism Detection Software has been evaluated by the esteemed AICTE technical expert committee and has been selected for empanelment with AICTE NEAT 3.0. '+
    'We are pleased to announce the successful signing of an MoU with AICTE – NEAT (National Education Alliance for Technology) scheme, making us a technology partner with AICTE NEAT, and contributing towards enhanced learning outcomes in India.',
    buttonLabel: 'Know More',
    img: './images/products/aicte.jpg',
    img1: './images/products/aicte-website.jpg',
    prodType: [
        {
            image: './images/products/organisation.svg',
            type: 'Organization',
            arrow: './images/products/arrow.svg',
            line: './images/products/line.svg',
            navLink: './organization'
        },
        {
            image: './images/products/institute.svg',
            type: 'Institutions',
            arrow: './images/products/arrow.svg',
            line: './images/products/line.svg',
            navLink: './institute'
        },
        {
            image: './images/products/personal.svg',
            type: 'Personal',
            arrow: './images/products/arrow.svg',
            line: './images/products/line.svg',
            navLink: './personal'
        }
    ]
};

export const UnicodeData = {
    title: 'Unicode converter',
    language: 'Select Language',
    fonts: 'Select Font',
    inputText: 'Type or paste text here... Maximum 120 words',
    outputText: 'Output text',
    loading: 'Loading...',
    errorMessage: 'Something went wrong , Please try again',
    convertToUnicode: 'Convert to Unicode',
    clearAll: 'Clear all',
    download: 'Download',
    unicodeLanguage :[
        { label: 'Assamese' },
        { label: 'Bengali' },
        { label: 'Gujarathi' },
        { label: 'Hindi' },
        { label: 'Kannada' },
        { label: 'Malayalam' },
        { label: 'Marathi' },
        { label: 'Oriya' },
        { label: 'Punjabi' },
        { label: 'Sanskrit' },
        { label: 'Tamil' },
        { label: 'Telugu' },
        { label: 'Urdu' },
    ]
};