import { useEffect, useState } from "react";
import { storage } from "webextension-polyfill";
import { getCurrentTab } from "../../helpers/tabs";

export const Counter = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    const readBackgroundMessage = async () => {
      const tab = await getCurrentTab();
      const tabId = tab.id;

      if (tabId) {
        const data = await storage.local.get(tabId.toString());
        const currentValue = data?.[tabId] ?? 0;

        setValue(currentValue);
      }
    };

    readBackgroundMessage();
  }, []);

  return <div>Clicks: {value}</div>;
};
