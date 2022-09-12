import "./BoxDescription.css";

function Box({ label }) {
  return (
    <div className="containerBox">
      <div className="labelBox">{label}</div>
      <div className="idsBoxDescription">
        <div className="idsValueBoxContent">
          - Cand nu va prezentati pentru un segment de zbor, compania aeriana
          isi rezerva dreptul de a le anula pe urmatoarele.
        </div>
        <div className="idsValueBoxContentDescription">
          - Biletul nu este transferabil. Schimbul biletului pentru un alt
          pasager nu este permis de compania aeriana.
        </div>
        <div className="idsValueBoxContentDescription">
          - Este necesara o viză valabila pentru a intra in multe tari.
          Conditiile pentru introducerea punctului intentionat trebuie
          verificate pe site-ul web al Ministerului Afacerilor Externe al tarii
          pe care urmează sa o vizitati. Acordurile internationale se aplica
          tuturor zborurilor.
        </div>
        <div className="idsValueBoxContentDescription">
          - Traversarea frontierei în perioada pandemica: Fiecare cetatean al
          Republicii Moldova este OBLIGAT sa se autoinformeze despre regulile in
          vigoare de calatorie in tara destinatie la fel si pentru cetătenii
          care revin in Republica Moldova pe cale aeriana.
        </div>
        <div className="idsValueBoxContentDescription">
          - AGENTIA AIRFLY.MD (AIR HOUSE S.R.L. ) NU POARTA NICI O RASPUNDERE
          PENTRU REFUZUL IMBARCARII SAU INTERZICEREA DE A TRECE O ANUMITA
          FRONTIERA.
        </div>
        <div className="idsValueBoxContentDescription">
          - AFLA INFORMATIILE OFICIALE DE CALATORIE DE CARE AI NEVOIE IN
          CONTEXTUL COVID-19 PE WWW.BORDER.GOV.MD SAU APELATI LA LINIA VERDE AL
          POLITIEI DE FRONTIERA AL RM LINIA VERDE: (373-22) 259-717.
        </div>
        <div className="idsValueBoxContentDescription">
          - PENTRU PERSOANE CARE NU DEȚIN O CETATENIE MOLDOVENEASCA RUGAM SA VA
          ADRESATI LA POLITIA DE FRONTIERA AL TARII UNDE A FOST EMISĂ CETATENIA.
        </div>
        <div className="idsValueBoxContentDescription">
          - IMPORTANT: TOTI PASAGERII SUNT OBLIGATI SA NE CONTACTEZE CU 24 DE
          ORE INAINTE DE ZBOR PENTRU A PRIMI CHECK-IN
        </div>
      </div>
    </div>
  );
}

export default Box;
