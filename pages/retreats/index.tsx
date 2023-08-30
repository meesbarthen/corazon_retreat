import SideImageContentBanner from "@/components/SideImageContentBanner";

export default function index() {
  return (
    <div className="">
      <SideImageContentBanner
        title="Het mother-daughter heart connection retreat"
        buttonLabel="Yes, I'am ready!"
        buttonLink="#"
        imageSrc="/WhatToExpect.jpg">
        <p>Wil jij:</p>
        <ul className="mt-4">
          <li>♥️ De band met je moeder of dochter verdiepen?</li>
          <li>♥️ Meer verbinding met jezelf ervaren?</li>
          <li>♥️ Vreugde in je leven vergroten?</li>
          <li>♥️ Even tot rust komen en opladen?</li>
          <li>♥️ Leren hoe je je diep kunt verbinden met je lichaam?</li>
          <li>
            ♥️ Gelijkgestemde vrouwen ontmoeten waarbij je helemaal jezelf kunt
            zijn?
          </li>
          <li>
            ♥️ Inzichten krijgen om meer vanuit verbinding met jezelf te leven?
          </li>
          <li>♥️ Meer vertrouwen in jezelf ontwikkelen?</li>
          <li>♥️ Heerlijk in de watten gelegd worden?</li>
          <li>
            ♥️ Bewust met je lichaam bezig zijn door gezonde voeding en
            beweging?
          </li>
          <li>♥️ Iets nieuws ervaren?</li>
        </ul>
      </SideImageContentBanner>
    </div>
  );
}
