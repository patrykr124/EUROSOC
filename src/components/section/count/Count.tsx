import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import CountLayout from "./CountLayout";
import { ShieldCheck, UserCheck } from "lucide-react";
function Count() {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="py-20 border-t-2 flex gap-12">
          <CountLayout
            Icon={ShieldCheck}
            count={1000}
            add="+"
            title="Weryfikowanych podatności każdego dnia"
          />
          <CountLayout
            Icon={UserCheck}
            count="24H/7/365"
            title="Monitoring infrastruktury w czasie rzeczywistym"
          />
          <CountLayout
            Icon={ShieldCheck}
            count="500MLN"
            add="+"
            title="Złośliwych skryptów w fazie skanowania"
          />
          <CountLayout
            Icon={ShieldCheck}
            count="30"
            title="Różnych specjalistów bezpieczeństwa do twojej dyspozycji"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Count;
