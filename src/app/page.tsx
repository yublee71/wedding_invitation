"use client";
import { Coverphoto } from "@/components/coverphoto";
import { Weddingdate } from "@/components/date";
import { Secondtexts } from "@/components/secondtext";
import { Texts } from "@/components/texts";
import { Gallery } from "@/components/gallery";
import { KakaoMapLocation } from "@/components/KakaoMapLocation";
import { Photomask } from "@/components/photomask";

export default function Home() {
  return (
    <main>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Weddingdate yearDate="2024年" monthDate="3月" dayDate="31日" />
        <Photomask />
        <Texts
          textyouWant="니콜라&이유빈"
          weddingtime="일요일 오전 11시 30분"
          place="브라이튼 하우스 한남점"
        />
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Secondtexts
          blah="서로가 마주보며 다져온 사랑을 이제 함께 한 곳을 바라보며 걸어갈 수 있는 큰 사랑으로 키우고자 합니다. 저희 두 사람이 사랑의 이름으로 지켜나갈 수 있도록 앞날을 축복해 주시면 감사하겠습니다."
          nameus1="빈센트 & 안의 아들"
          nameus2="니콜라"
          nameus3="이동기 & 남숙영의 딸"
          nameus4="이유빈"
        ></Secondtexts>
      </section>
      <section style={{ padding: 50 }}>
        <Gallery />
      </section>
      <section>
        <KakaoMapLocation />
      </section>
    </main>
  );
}
