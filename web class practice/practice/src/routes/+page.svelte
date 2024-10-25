 <!-- <h2>article</h2> 
<article>
  <p>
    <span
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem
      obcaecati sed in quas temporibus perferendis velit illo sunt consequatur
      illum ipsam aliquid fugit id totam cum, iusto quos dolores.</span
    ><span
      >Officiis eius suscipit aliquam eveniet. Earum minus expedita doloribus
      voluptates doloremque? Accusantium ab, optio minima fugit possimus odio
      vero accusamus vitae consectetur facere alias debitis, cumque doloribus
      neque est laborum!</span
    ><span
      >Reprehenderit distinctio aspernatur deleniti incidunt blanditiis
      consequuntur recusandae aut labore sequi, molestiae iste, dolorum nihil
      commodi odio, earum ullam? Tempore quis ipsam ut libero voluptatibus esse
      explicabo voluptatem ullam dignissimos?</span
    ><span
      >Illum veniam nam molestias quos, odio magni id expedita reprehenderit
      repellendus in soluta impedit placeat modi laborum quisquam labore nobis
      doloribus accusantium hic doloremque maiores ullam omnis voluptatibus
      praesentium? Tempore.</span
    ><span
      >Blanditiis debitis tempore molestiae repellat, officia aspernatur
      consequatur ad! Nemo nam rerum necessitatibus iure, delectus repudiandae
      tempora impedit, vel, eius voluptates maxime? Error, earum fugit dolorum
      non voluptate obcaecati dolores!</span
    >
  </p>
  <p>
    <span
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod optio
      asperiores itaque facere cum doloribus molestiae eligendi odit
      voluptatibus sint fuga eius exercitationem quam repudiandae ipsa debitis
      sed officia.</span
    ><span
      >Nobis pariatur voluptatum ratione soluta facere accusantium ut tenetur
      iusto qui et impedit harum nostrum cumque repellat minima inventore sit
      similique, quae aspernatur nemo perferendis, natus possimus voluptas quia.
      Placeat!</span
    ><span
      >Reprehenderit placeat cum magni ipsa, velit, reiciendis fuga numquam
      consequatur maiores nobis, cumque quia aperiam dolor. Incidunt animi illo
      dolores magnam minus corrupti officia laudantium dolore, totam, quos
      reprehenderit saepe.</span
    ><span
      >Hic sequi vitae reprehenderit, quo ratione doloribus eos molestiae
      aperiam, numquam, debitis nemo. Cupiditate amet doloribus molestiae, cum
      doloremque et inventore odio officia perspiciatis ipsum soluta nemo
      commodi porro facilis!</span
    ><span
      >Velit nostrum delectus accusantium dolor temporibus recusandae atque
      eveniet magnam ipsum repellendus, accusamus natus error aliquid iure
      reprehenderit id voluptates eaque? Non minus nisi quos iste possimus?
      Nesciunt, alias vero?</span
    >
  </p>
  <p>
    <span
      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quod a
      libero voluptatem porro laborum voluptatum in dolores ab, modi animi
      ducimus quaerat esse provident laudantium id fuga dolor neque?</span
    ><span
      >Iste, optio est? Nemo qui iure, velit quaerat praesentium, necessitatibus
      asperiores voluptatibus rerum laborum enim nihil ipsa quo excepturi, optio
      alias possimus error sed nesciunt maxime numquam aperiam fugit quibusdam!</span
    ><span
      >Numquam vel laudantium eius. Impedit minus neque perspiciatis alias,
      culpa eveniet sed ipsum autem nostrum porro eligendi repudiandae provident
      asperiores quas eius praesentium nihil omnis saepe dignissimos natus.
      Porro, officiis?</span
    ><span
      >Eius possimus suscipit illum similique dolor repudiandae omnis dolores. A
      quod nobis perferendis, commodi officia et quis possimus cupiditate
      mollitia non! At, vel dolorum. Sapiente aliquam dignissimos unde quas
      ullam?</span
    ><span
      >Ullam, ad alias soluta numquam ut velit illo animi, facilis quos tenetur
      hic! Reprehenderit adipisci molestiae recusandae laudantium, aperiam
      suscipit odio sit architecto odit, earum aliquid porro quod tempore
      delectus.</span
    >
  </p>
  <p>
    <span
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, cum
      iusto reprehenderit reiciendis odit officia debitis at fuga explicabo
      doloremque minima sunt expedita voluptatibus! Eaque optio ut ad temporibus
      error.</span
    ><span
      >Quo aliquam unde totam maiores eligendi illo eos consequuntur impedit.
      Molestias sapiente tenetur, quam iure ex animi nemo soluta similique esse
      dolores inventore nobis illo laborum, unde nostrum dolorum quas!</span
    ><span
      >Rem esse eligendi quasi quis repudiandae tempore eum velit! Deleniti quos
      esse doloremque! Ratione, impedit quibusdam. Porro voluptas quos
      perferendis, quisquam, voluptate sequi qui autem delectus esse iusto quod
      consectetur.</span
    ><span
      >Aspernatur suscipit molestiae quasi provident expedita fugiat ad culpa
      voluptate voluptates et, sint ipsa saepe sequi magni! Tenetur, eum!
      Reprehenderit mollitia impedit at repudiandae laudantium facere blanditiis
      earum veritatis consequuntur.</span
    ><span
      >Vel repellendus inventore non ad. Totam reiciendis ipsa maiores fuga
      suscipit ratione nostrum ad enim autem nisi repellendus eligendi magnam
      quas porro, hic pariatur molestiae sapiente unde iste nam laborum!</span
    >
  </p>
</article>
-->
<script>
  export let data;
  console.log(data);
  const posts = data.posts;
  import Post from "./post.svelte";
</script>

<h2>News about learning sveltkit</h2>

{#each posts as post}
<Post {post} />

{/each}

