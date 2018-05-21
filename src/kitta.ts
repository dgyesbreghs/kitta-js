"use strict";

import * as Request from "request";

Request.get("http://www.google.com", (error, response, body) => {
    if (error) {
        return;
    }
    console.log('🚀 statusCode:', response && response.statusCode);
    console.log('🚀 body:', body);
});
