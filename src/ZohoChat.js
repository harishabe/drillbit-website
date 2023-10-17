import React from 'react';

export default function ZohoChat() {
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || {
        widgetcode: '193471557d534666a8eafb70b62f1aaad4974155ce45c2e276b8cfff0b78cc87a530db9af3b4b39695ce84fd090292af',
        values: {},
        ready: function () { },
    };
    const d = document;
    let s;
    s = d.createElement('script');
    s.type = 'text/javascript';
    s.id = 'zsiqscript';
    s.defer = true;
    s.src = 'https://salesiq.zoho.com/widget';
    let t;
    t = d.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
    return (
        <React.Fragment>
            <div id='zsiqwidget'></div>
        </React.Fragment>
    );
}
