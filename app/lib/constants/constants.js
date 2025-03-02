export let dummyText = [
  `Frère Jacques, Frère Jacques
Dormez-vous? Dormez-vous?
Sonnes les matines! Sonnez les matines!`,
  `London Bridge is falling down
Falling down, falling down
London Bridge is falling down
My fair lady`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rem a accusantium voluptas, delectus iste soluta harum officiis optio ullam sunt incidunt at id modi nulla nostrum corrupti neque eaque. Tempora quibusdam temporibus ab vero unde libero culpa veniam fugit sed in excepturi voluptas minus, quis dolores quod cum delectus magnam! Consequatur ullam tenetur quaerat voluptatem! Praesentium aspernatur recusandae, quam modi asperiores voluptatum quisquam aut harum sed nam. Quisquam corporis non iure nihil ullam impedit officia autem eos asperiores maiores fugiat assumenda, ea doloremque totam qui earum accusantium quos voluptates porro reprehenderit quidem dignissimos dolore! Architecto aliquid quo possimus corrupti tempora velit, vel veniam repellendus cupiditate sed! Error ipsam eveniet officia sunt impedit ex porro omnis voluptas vitae et reprehenderit deleniti dolorem, hic quidem velit quia natus, quod odio, totam optio! Sint saepe incidunt natus atque iure deserunt vero officiis optio praesentium animi sed minus voluptate accusantium illo voluptatum id quos quia officia, repudiandae blanditiis hic cumque neque. Eaque corporis itaque soluta culpa a, aspernatur minus? Natus facere asperiores cumque. Nihil, exercitationem totam? Natus ex veniam nihil quidem officiis, eaque quasi quod delectus a deserunt cumque vero sunt vel voluptate, fuga sequi facilis dicta molestiae placeat consectetur exercitationem! Numquam, cupiditate?`,
]

export let diffWordColors = `data-[diff=hard]:bg-orange-800 data-[diff=med]:bg-yellow-800 data-[diff=easy]:bg-green-800 data-[diff=wk]:bg-black data-[diff=uk]:bg-purple-500`

export let diffBtnColors = {
  hard: "bg-orange-800 hover:bg-orange-700 active:bg-orange-900",
  med: "bg-yellow-800 hover:bg-yellow-700 active:bg-yellow-900",
  easy: "bg-green-800 hover:bg-green-700 active:bg-green-900",
  wk: "bg-gray-500 hover:bg-gray-400 active:bg-gray-600",
  uk: "bg-purple-500 hover:bg-purple-400 active:bg-purple-600",
}

export function findDiff(word) {
  try {
    return JSON.parse(sessionStorage.getItem(word)).diff
  } catch {
    return "uk"
  }
}
