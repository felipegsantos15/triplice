const mysqlAcess = require('./mysql/mysqlAcess');


const router = {
    createObject: async (data) => {
        try {
            let stepsObject = await router.populateObject(data);
            let templateSlug = `builderTemplate${data.slug}`;
            let templateFunnel = `hotsite-builder-template-${data.slug}`;
            let obj = {
                name: data.templateName,
                slug: templateSlug,
                funnel: templateFunnel,
                steps: JSON.stringify(stepsObject),
                client_id: data.clientId
            }
            return await mysqlAcess.insertTemplate(obj);
        } catch (err) {
            console.log(err);
            throw err.message;
        }
    },
    populateObject: async (data) => {
        try {
            return {
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
                        "actionsStyles": {
                            "leftJustify": data.leftJustify,
                            "showIcons": data.showIcons,
                            "primaryColor": data.primaryColor,
                            "secundaryColor": data.secundaryColor,
                            "backgroundColor": data.backgroundColor,
                        },
                        "actions": [
                            {
                                "name": "negotiationOnline",
                                "icon": "ion-android-call",
                                "click": "negotiationOnline",
                                "options": [],
                                "value": JSON.parse(data.autoNegotiation),
                                "input": JSON.parse(data.autoNegotiation),
                                "inputValue": data.autoNegotiationValue,
                                "labelValue": data.autoNegotiationPhrase,
                                "label": data.callPhrase,
                                "inputClass": "number"
                            },
                            {
                                "name": "call",
                                "icon": "ion-android-call",
                                "click": "call",
                                "options": [],
                                "value": JSON.parse(data.call),
                                "input": JSON.parse(data.call),
                                "inputValue": data.callValue,
                                "labelValue": data.callPhrase,
                                "label": data.callPhrase,
                                "inputClass": "number"
                            },
                            {
                                "name": "redirectToEmail",
                                "icon": "ion-email",
                                "click": "redirectToEmail",
                                "options": [],
                                "value": JSON.parse(data.email),
                                "input": JSON.parse(data.email),
                                "inputValue": data.emailValue,
                                "labelValue": data.emailPhrase,
                                "label": data.emailPhrase
                            },
                            {
                                "name": "callMe",
                                "icon": "ion-android-call",
                                "click": "callMe",
                                "span": "(grátis)",
                                "value": JSON.parse(data.callMe),
                                "input": JSON.parse(data.callMe),
                                "inputValue": data.callMeValue,
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
                                "value": JSON.parse(data.callMeLater),
                                "input": JSON.parse(data.callMeLater),
                                "labelValue": data.callMeLaterPhrase,
                                "label": data.callMeLaterPhrase,
                                "inputClass": "number"
                            },
                            {
                                "name": "whatsappContact",
                                "icon": "ion-social-whatsapp-outline",
                                "click": "whatsapp",
                                "options": [],
                                "value": JSON.parse(data.whatsapp),
                                "input": JSON.parse(data.whatsapp),
                                "inputValue": data.whatsappValue,
                                "labelValue": data.whatsappPhrase,
                                "label": data.whatsappPhrase,
                                "inputClass": "number"
                            },
                            {
                                "name": "chat",
                                "icon": "ion-chatbubbles",
                                "click": "chat",
                                "options": [],
                                "value": JSON.parse(data.chat),
                                "input": JSON.parse(data.chat),
                                "inputValue": data.chatValue,
                                "labelValue": data.chatPhrase,
                                "label": data.chatPhrase
                            }
                        ]
                    }
                ],
                "options": {
                    "geolocalization": JSON.parse(data.geolocalization)
                },
                "actions": [
                    {
                        "name": "negotiation",
                        "icon": "ion-android-call",
                        "click": "negotiation",
                        "options": [],
                        "value": JSON.parse(data.autoNegotiation),
                        "input": JSON.parse(data.autoNegotiation),
                        "inputValue": data.autoNegotiationValue,
                        "labelValue": data.autoNegotiationPhrase,
                        "label": data.callPhrase,
                        "inputClass": "number"
                    },
                    {
                        "name": "call",
                        "icon": "ion-android-call",
                        "click": "call",
                        "options": [],
                        "value": JSON.parse(data.call),
                        "input": JSON.parse(data.call),
                        "inputValue": data.callValue,
                        "labelValue": data.callPhrase,
                        "label": data.callPhrase,
                        "inputClass": "number"
                    },
                    {
                        "name": "redirectToEmail",
                        "icon": "ion-email",
                        "click": "redirectToEmail",
                        "options": [],
                        "value": JSON.parse(data.email),
                        "input": JSON.parse(data.email),
                        "inputValue": data.emailValue,
                        "labelValue": data.emailPhrase,
                        "label": data.emailPhrase
                    },
                    {
                        "name": "callMe",
                        "icon": "ion-android-call",
                        "click": "callMe",
                        "span": "(grátis)",
                        "value": JSON.parse(data.callMe),
                        "input": JSON.parse(data.callMe),
                        "inputValue": data.callMeValue,
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
                        "value": JSON.parse(data.callMeLater),
                        "input": JSON.parse(data.callMeLater),
                        "labelValue": data.callMeLaterPhrase,
                        "label": data.callMeLaterPhrase,
                        "inputClass": "number"
                    },
                    {
                        "name": "whatsappContact",
                        "icon": "ion-social-whatsapp-outline",
                        "click": "whatsapp",
                        "options": [],
                        "value": JSON.parse(data.whatsapp),
                        "input": JSON.parse(data.whatsapp),
                        "inputValue": data.whatsappValue,
                        "labelValue": data.whatsappPhrase,
                        "label": data.whatsappPhrase,
                        "inputClass": "number"
                    },
                    {
                        "name": "chat",
                        "icon": "ion-chatbubbles",
                        "click": "chat",
                        "options": [],
                        "value": JSON.parse(data.chat),
                        "input": JSON.parse(data.chat),
                        "inputValue": data.chatValue,
                        "labelValue": data.chatPhrase,
                        "label": data.chatPhrase
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
                                "inputValue": "18:00"
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

        } catch (e) {
            throw e.message;
        }
    }
}

module.exports = router;