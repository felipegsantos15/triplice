
const router = {
    createObject: (data) => {
        return new Promise((resolve, reject) => {
            let stepsObject = {
                "steps": [
                    {
                        "name": "Landing Page",
                        "images": {
                            "logo": data.logoImg,
                            "background": data.backgroundImg,
                            "footer": data.footerImg,
                        },
                        "lineActions": [],
                        "content": [
                            {
                                "value": data.pageTitle,
                                "name": "texto da imagem",
                                "type": "text",
                                "extra": {
                                    "customFields": [
                                        "Nome"
                                    ]
                                }
                            },
                            {
                                "value": data.bodyText,
                                "name": "texto sobre o template",
                                "type": "text",
                                "extra": {
                                    "customFields": [
                                        "Nome"
                                    ]
                                }
                            },
                            {
                                "value": data.footerLink,
                                "name": "link para site",
                                "type": "link",
                                "extra": {
                                    "customFields": [
                                        "Nome"
                                    ]
                                }
                            }
                        ],
                        "actions": [
                            {
                                "name": "call",
                                "icon": "ion-android-call",
                                "click": "call",
                                "options": [],
                                "value": true,
                                "input": true,
                                "inputValue": "",
                                "labelValue": "Numero Ligar",
                                "label": "Você me liga"
                            },
                            {
                                "name": "redirectToEmail",
                                "icon": "ion-email",
                                "click": "redirectToEmail",
                                "options": [],
                                "value": true,
                                "input": true,
                                "inputValue": "",
                                "labelValue": "Mandar um E-mail",
                                "label": "E-mail"
                            },
                            {
                                "name": "callMe",
                                "icon": "ion-android-call",
                                "click": "callMe",
                                "span": "(grátis)",
                                "value": false,
                                "input": false,
                                "inputValue": "",
                                "labelValue": "Numero Ligue-me",
                                "label": "Eu te ligo agora",
                                "inputClass": "number"
                            },
                            {
                                "name": "callMeLater",
                                "icon": "ion-android-call",
                                "click": "callMeLater",
                                "span": "(grátis)",
                                "options": [],
                                "value": false,
                                "input": false,
                                "labelValue": "Ligue-me mais tarde",
                                "label": "Eu te ligo mais tarde",
                                "inputClass": "number"
                            },
                            {
                                "name": "whatsappContact",
                                "icon": "ion-social-whatsapp-outline",
                                "click": "whatsapp",
                                "options": [],
                                "value": true,
                                "input": true,
                                "inputValue": "",
                                "labelValue": "Numero WhatsApp",
                                "label": "Fale conosco pelo WhatsApp"
                            },
                            {
                                "name": "chat",
                                "icon": "ion-chatbubbles",
                                "click": "chat",
                                "options": [],
                                "value": false,
                                "input": false,
                                "inputValue": "",
                                "labelValue": "Url Chat",
                                "label": "Chat"
                            }
                        ]
                    }
                ],
                "actions": [
                    {
                        "name": "call",
                        "icon": "ion-android-call",
                        "click": "call",
                        "options": [],
                        "value": data.call,
                        "input": data.call,
                        "inputValue": "",
                        "labelValue": data.callPhrase,
                        "label": data.callPhrase,
                        "inputClass": "number"
                    },
                    {
                        "name": "redirectToEmail",
                        "icon": "ion-email",
                        "click": "redirectToEmail",
                        "options": [],
                        "value": data.email,
                        "input": data.email,
                        "inputValue": "",
                        "labelValue": data.emailPhrase,
                        "label": data.emailPhrase
                    },
                    {
                        "name": "callMe",
                        "icon": "ion-android-call",
                        "click": "callMe",
                        "span": "(grátis)",
                        "value": data.callMe,
                        "input": data.callMe,
                        "inputValue": "08007255827",
                        "labelValue": data.callMePhrase,
                        "label": data.callMePhrase,
                        "inputClass": "number"
                    },
                    {
                        "name": "callMeLater",
                        "icon": "ion-android-call",
                        "click": "callMeLater",
                        "span": "(grátis)",
                        "options": [],
                        "value": data.callMeLater,
                        "input": data.callMeLater,
                        "labelValue": data.callMeLaterPhrase,
                        "label": data.callMeLaterPhrase,
                        "inputClass": "number"
                    },
                    {
                        "name": "whatsappContact",
                        "icon": "ion-social-whatsapp-outline",
                        "click": "whatsapp",
                        "options": [],
                        "value": data.whatsapp,
                        "input": data.whatsapp,
                        "inputValue": "",
                        "labelValue": data.whatsappPhrase,
                        "label": data.whatsappPhrase,
                        "inputClass": "number"
                    },
                    {
                        "name": "chat",
                        "icon": "ion-chatbubbles",
                        "click": "chat",
                        "options": [],
                        "value": true,
                        "input": true,
                        "inputValue": "",
                        "labelValue": "Url Chat",
                        "label": "Chat"
                    }
                ],
                "actionsOptions": [
                    {
                        "name": "weekCommercialWorkTime",
                        "input": true,
                        "value": true,
                        "type": "time",
                        "between": true,
                        "labelValue": "Horario de atendimento em dias uteis",
                        "label": "Horario de atendimento em dias uteis",
                        "fields": [
                            {
                                "name": "weekCommercialStartTime",
                                "inputValue": "08:00"
                            },
                            {
                                "name": "weekCommercialEndTime",
                                "inputValue": "20:30"
                            }
                        ],
                        "inputClass": "hour"
                    },
                    {
                        "name": "saturdayCommercialWorkTime",
                        "input": true,
                        "value": true,
                        "type": "time",
                        "between": "1",
                        "labelValue": "Horario de atendimento aos Sabados",
                        "label": "Horario de atendimento aos Sabados",
                        "fields": [
                            {
                                "name": "saturdayCommercialStartTime",
                                "inputValue": "08:00"
                            },
                            {
                                "name": "saturdayCommercialEndTime",
                                "inputValue": "14:00"
                            }
                        ],
                        "inputClass": "hour"
                    },
                    {
                        "name": "callmeLaterLimit",
                        "input": true,
                        "value": true,
                        "type": "text",
                        "between": false,
                        "fields": [
                            {
                                "name": "callmeLaterLimit",
                                "inputValue": "3",
                                "value": "3"
                            }
                        ],
                        "labelValue": "Dias para Ligue-me mais tarde",
                        "label": "Dias para Ligue-me mais tarde",
                        "inputClass": "daysCallmeLater"
                    },
                    {
                        "externalData": true,
                        "dataSource": "wsPernambucanas"
                    }
                ]
            }

            // data.leftJustify = false;
            // data.showIcons = false;
            // data.secundaryColor = "#dddddd";
            // data.colorPicker = "#ffffff";
            // data.primaryColor = "#337ab7"; 
            // data.secundaryColor = '#444444';
        });
    }
}

module.exports = router;