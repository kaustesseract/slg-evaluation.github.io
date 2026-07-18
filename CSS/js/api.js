/* ==========================================================
   Automated Sign Language Generator Evaluation
   Google Apps Script API
========================================================== */

const API_URL =
"https://script.google.com/macros/s/AKfycbzDVZqyogK4lpCevhRALceTpyXuHDV6m3b1phyiRmlalIkYNv28wudxF6PMfZO03BHD/exec";

/* ---------------------------------------------------------
   POST helper
--------------------------------------------------------- */

async function sendRequest(payload){

    try{

        const response = await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(payload)

        });

        return await response.json();

    }

    catch(error){

        console.error(error);

        return{

            success:false,

            message:error.message

        };

    }

}

/* ==========================================================
   DEMOGRAPHICS
========================================================== */

async function saveDemographics(){

    const payload={

        action:"demographics",

        participantID:
        sessionStorage.getItem("participantID"),

        age:
        sessionStorage.getItem("age"),

        gender:
        sessionStorage.getItem("gender"),

        education:
        sessionStorage.getItem("education"),

        years:
        sessionStorage.getItem("years"),

        frequency:
        sessionStorage.getItem("frequency"),

        proficiency:
        sessionStorage.getItem("proficiency")

    };

    return await sendRequest(payload);

}

/* ==========================================================
   SCREENING
========================================================== */

async function saveScreening(

video,

question,

response,

language

){

    const payload={

        action:"screening",

        participantID:
        sessionStorage.getItem("participantID"),

        language:language,

        video:video,

        question:question,

        response:response

    };

    return await sendRequest(payload);

}

/* ==========================================================
   TUTORIAL
========================================================== */

async function saveTutorial(status){

    const payload={

        action:"tutorial",

        participantID:
        sessionStorage.getItem("participantID"),

        completed:status

    };

    return await sendRequest(payload);

}

/* ==========================================================
   EVALUATION
========================================================== */

async function saveEvaluation(

video,

rating,

comment

){

    const payload={

        action:"evaluation",

        participantID:
        sessionStorage.getItem("participantID"),

        video:video,

        rating:rating,

        comment:comment

    };

    return await sendRequest(payload);

}

/* ==========================================================
   METADATA
========================================================== */

async function saveMetadata(status){

    const payload={

        action:"metadata",

        participantID:
        sessionStorage.getItem("participantID"),

        status:status,

        browser:
        navigator.userAgent,

        timestamp:
        new Date().toISOString()

    };

    return await sendRequest(payload);

}
