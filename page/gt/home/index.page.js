import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { TEXT_DISPLAY } from "zosLoader:./index.page.[pf].layout.js";

import { Battery } from '@zos/sensor'
const logger = Logger.getLogger("helloworld");
const battery = new Battery()

let text = battery.getCurrent();

Page({
  state:{},

  build() {
    logger.debug("page build invoked");
    p = hmUI.createWidget(hmUI.widget.TEXT, { 
      ...TEXT_DISPLAY,
      text,
    });

    battery.onChange(()=>{
      logger.debug("batteryChanges");
      let newBattery = battery.getCurrent();
      if(text != newBattery){
        logger.debug("change")
        text = newBattery;
        hmUI.deleteWidget(p);
        p = hmUI.createWidget(hmUI.widget.TEXT, { 
          ...TEXT_DISPLAY,
          text,
        });
        
        
        }
    });
    
    
   
  },



});
