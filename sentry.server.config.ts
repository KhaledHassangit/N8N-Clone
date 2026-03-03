// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";


Sentry.init({
  dsn: "https://5b95db5c10e7a7cb041d04ae05127561@o4510982321995776.ingest.us.sentry.io/4510982349258752",
  integrations: [
    Sentry.vercelAIIntegration({
      recordInputs: true,
      recordOutputs: true,
    }),
    
    Sentry.consoleLoggingIntegration({
      levels:["log","warn","error"]
    }),
  ],
  // Tracing must be enabled for agent monitoring to work
  tracesSampleRate: 1.0,
  // Add data like inputs and responses to/from LLMs and tools;
  // see https://docs.sentry.io/platforms/javascript/data-management/data-collected/ for more info
  sendDefaultPii: true,
});