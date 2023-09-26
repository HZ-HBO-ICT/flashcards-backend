import data from './questions.json' assert { type: 'json' };

// https://medium.com/gist-for-js/use-of-res-json-vs-res-send-vs-res-end-in-express-b50688c0cddf

function getToDay() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  console.log(currentDate); // "17-6-2022"
  return currentDate;
}

const tempResponse = {
  meta: {
    date: getToDay(),
  },
  data: {
    message: 'this route is not implemented yet',
  },
};

export async function getIndex(req, res, next) {
  try {
    //set header before response
    res.status(200).send(tempResponse);
  } catch (err) {
    next(err);
  }
}

export async function getOptionsForSubjects(req, res, next) {
  try {
    //set header before response
    res.header({
      allow: 'GET, POST, OPTIONS',
      'Content-type': 'application/json',
      Data: Date.now(),
      'Content-length': 0,
    });
    //response
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}

export function getAllSubjects(req, res, next) {
  try {
    //set header before response
    res.status(200).send(tempResponse);
  } catch (err) {
    next(err);
  }
}

export function getASubject(req, res, next) {
  try {
    //set header before response
    res.status(200).send(tempResponse);
  } catch (err) {
    next(err);
  }
}
export function getAllTopicsOfASubject(req, res, next) {
  try {
    //set header before response
    res.status(200).send(tempResponse);
  } catch (err) {
    next(err);
  }
}

export function getATopicOfASubject(req, res, next) {
  try {
    //set header before response
    res.status(200).send(tempResponse);
  } catch (err) {
    next(err);
  }
}

export function getAllQuestionsPerTopic(req, res, next) {
  try {
    //set header before response
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
}
export function getAQuestionForAtopic(req, res, next) {
  try {
    //set header before response
    // maybe get a random question
    res.status(200).send(tempResponse);
  } catch (err) {
    next(err);
  }
}

/**
 * questions/
 * First select the subject and topic and then add questions to it
 *
 * Post = {
 *  "word": "",
 *  "description": "",
 *  "hint": ""
 * }
 * '/subjects/:subject/topics/:topic/questions'
 */
export async function createAQuestionForATopic(req, res, next) {
  try {
    //set header before response
    // maybe get a random question
    const body = req.body;
    const url = req.url;
    const subject = req.params['subject'];
    const topic = req.params['topic'];
    const word = req.body.word;
    const description = req.body.description;
    const hint = req.body.hint

    // const url_parts = url.replace(/\/\s*$/, '').split('/');
    // url_parts.shift();
    if (req.body.word && req.body.description && req.body.hint) {
      res
        .status(200)
        .send(
          `Hi ${req.body.name}! I made an appointment for: ${url_parts[3]}-${url_parts[2]} at ${req.body.starttime}!`
        );
    } else {
      res
        .status(200)
        .send(
          'Hi love. I cannot make any appoints because something is missing'
        );
    }
  } catch (err) {
    next(err);
  }
}
