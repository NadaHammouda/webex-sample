import React, {useEffect, useState} from 'react';
import Webex from 'webex';
import WebexSDKAdapter from '@webex/sdk-component-adapter';
import { WebexDataProvider, WebexMeeting } from '@webex/components';

import '@momentum-ui/core/css/momentum-ui.min.css';
import '@webex/components/dist/css/webex-components.css';

const webex = new Webex({
  credentials: {
    access_token: `YmMyZDE1NzYtYmM4NS00OTFmLWFlNDItMGJiOTE2OWYyMmY4OWIxOTNhNzUtYmVm_PF84_79683210-d7dc-4e37-ac36-60fb5361cc2a`},
});
const adapter = new WebexSDKAdapter(webex);

function App() {
  const [adapterConnected, setAdapterConnected] = useState(false);
  useEffect(() => {
    async function doConnect() {
      await adapter.connect();
      setAdapterConnected(true);
    }
    doConnect();
    return () => {
      adapter.disconnect();
    }
  }, []);

  return (
    <div>
      {
        adapterConnected && (
          <WebexDataProvider adapter={adapter} >
            <div style={{height: '600px'}}>
              <WebexMeeting
                meetingDestination="1753313639@engelkomy.my.webex.com"
              />
            </div>
          </WebexDataProvider>
        )
      }
    </div>
  );
}

export default App;
