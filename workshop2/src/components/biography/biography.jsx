import "./biography.scss";

function Biography() {
  return (
    <>
      <div className="bio-all">
        <div className="title_lakers">
          <h2>Les Lakers : Biographie </h2>
        </div>
        <div className="banner-contain">
        <img className="banner-photo" src="../../public/images/lakers_banner.jpg" />
        </div>
        <div className="photo-info">
          <img className="bio-photo" src="../../public/images/Lakers_bio.png" />
          <div className="title-para">
            <div className="contain-para">
              <p className="paragraph">
                Les Lakers, l'une des franchises les plus légendaires de la NBA,
                ont une histoire riche et fascinante. Fondée en 1947 à
                Minneapolis, la franchise a déménagé à Los Angeles en 1960.
                Depuis lors, elle est devenue l'une des équipes les plus
                emblématiques du basket-ball professionnel. Les débuts des
                Lakers ont été marqués par des joueurs légendaires tels que
                George Mikan, qui a dominé la ligue dans les années 1950, aidant
                les Lakers à remporter cinq titres de la NBL et de la NBA.
                Cependant, c'est dans les années 1980 que les Lakers ont atteint
                de nouveaux sommets de succès avec le trio magique de Magic
                Johnson, Kareem Abdul-Jabbar et James Worthy sous la direction
                de l'entraîneur Pat Riley. Cette période a été marquée par de
                nombreux titres de championnat, dont cinq remportés dans les
                années 1980. Dans les années 2000, les Lakers ont renoué avec le
                succès sous la direction de Kobe Bryant et Shaquille O'Neal,
                remportant trois championnats supplémentaires. Bryant, l'une des
                figures les plus emblématiques de l'histoire de la NBA, a
                continué à dominer le jeu après le départ de O'Neal, remportant
                deux titres de plus en 2009 et 2010 avec l'aide de Pau Gasol et
                d'autres coéquipiers. Le succès des Lakers ne se limite pas aux
                joueurs, mais aussi aux entraîneurs emblématiques tels que Phil
                Jackson, qui a dirigé l'équipe vers plusieurs titres de
                championnat. La franchise a également été le théâtre de nombreux
                moments historiques, notamment le jeu « Showtime » des années
                1980, les rivalités épiques avec les Celtics de Boston, et les
                performances légendaires de joueurs tels que Jerry West, Elgin
                Baylor, et bien d'autres. Au fil des décennies, les Lakers ont
                acquis une base de fans mondiale et sont devenus un symbole de
                succès, d'excellence et d'innovation dans le monde du basketball
                professionnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Biography;
