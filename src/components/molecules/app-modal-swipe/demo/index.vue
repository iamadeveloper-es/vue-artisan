<script lang="ts">
export default {
  name: 'app-modal-swipe-demo'
};
</script>

<script setup lang="ts">
import AppModalSwipe from '../index.vue';
import AppButton from '../../app-button/index.vue';
import { ref } from 'vue';

const modal1 = ref(null);
const modal2 = ref(null);
const modal3 = ref(null);

const showModal1 = () => {
  modal1.value?.show();
};

const showModal2 = () => {
  modal2.value?.show();
};

const showModal3 = () => {
  modal3.value?.show();
};
</script>

<template lang="pug">
.app-modal-swipe-demo
    app-button(text="Mostrar modal desde abajo", 
    @clicked="showModal1")
    app-button(text="Mostrar modal desde derecha", 
    @clicked="showModal2")
    app-button(text="Mostrar modal desde izquierda", 
    @clicked="showModal3")
    app-modal-swipe(ref="modal1")
        template(#header)
            h3 Modal 2 con scroll
        template(#body)
            h1 Modal 1 con efecto 'modal-fade'
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum quam eveniet vel amet, cum repudiandae placeat laboriosam? Dignissimos velit nulla dolore mollitia quidem alias tenetur autem odit quaerat ut quae vitae dolor culpa, expedita officiis neque, harum molestiae dolores sequi tempora corrupti in consequuntur porro. Voluptatum repellendus accusantium a atque iusto ipsam numquam veniam similique rem debitis et quo ipsum, nemo nisi, esse beatae fuga! Aspernatur, repellat numquam! Culpa autem quis corporis corrupti quasi, id voluptatibus eius totam facere ex animi. Provident dolore cupiditate, amet iure, dolor placeat veniam suscipit incidunt a error tempora? Blanditiis temporibus architecto rem ratione quae hic deserunt veniam, nemo at nam alias vitae quisquam aliquid facilis ullam quasi quam quibusdam laborum ipsum provident saepe possimus! Aspernatur sit velit dolores nisi autem placeat dolore possimus amet aliquid deserunt. Deleniti placeat, repellat inventore soluta sit ex quidem, dolores optio explicabo alias ratione et enim iure ut dicta. Dignissimos ad vitae quam culpa voluptate deleniti fugiat. Unde consequatur quod laboriosam tempora dolor blanditiis molestiae beatae optio ea dolorem, quia ut iusto quo soluta! Autem culpa provident voluptatibus id! Voluptates laborum facere maxime voluptatum quos ipsam quod placeat reiciendis velit, dolorum modi possimus voluptate veritatis, odit nostrum aperiam unde ad atque minus repellat. Amet ex molestias quaerat laudantium, voluptatibus officiis, quibusdam nobis nesciunt sapiente quasi itaque quae provident mollitia velit debitis? Temporibus quos consequatur facere voluptatum incidunt vel aliquam eum eligendi commodi, explicabo laboriosam accusamus nemo nesciunt reiciendis, nulla eius id perspiciatis? Blanditiis, autem quibusdam deserunt ratione reprehenderit doloremque qui eveniet molestias dolorem voluptatibus commodi laudantium itaque id, sed ut aliquam maxime vero odit optio rem nisi. Distinctio itaque minus possimus sed deleniti id, exercitationem consequuntur atque, rem omnis nisi quas illum est adipisci, iusto fugiat aliquid perferendis asperiores nobis veritatis cupiditate minima sunt magni! Recusandae magnam corrupti dignissimos blanditiis, alias nemo beatae laudantium sit accusamus, neque placeat unde eos voluptatibus, libero nam rerum sapiente itaque. Alias eius suscipit consectetur velit eligendi, cumque minima cum magni iusto vero, vitae reiciendis impedit voluptate consequuntur possimus, fugiat fugit nisi sapiente incidunt amet obcaecati? Nisi, blanditiis aperiam, non doloribus at, nobis voluptatibus quia suscipit iure eius maxime cumque. Magni unde debitis autem, vitae dolores accusamus ad distinctio quos voluptatem nobis voluptates vel ea ipsum? Ea, repellendus. Nesciunt mollitia sint placeat commodi omnis officiis ex veritatis sed, autem, alias delectus eius, itaque maiores perspiciatis nam. Impedit quo quia molestias qui consequatur quod earum repellendus laborum iusto ratione perspiciatis architecto explicabo fugiat, dicta quibusdam incidunt voluptatibus consequuntur corporis recusandae hic maxime libero facere. Deleniti ullam nobis commodi maiores veritatis nostrum eius nisi repellat debitis ab illo voluptatum natus odit error delectus fugit facilis in exercitationem dolorum, omnis illum quidem quo at? Deserunt adipisci sit velit quos dolorem delectus voluptate, dolorum vero possimus enim quisquam ut quidem inventore. Possimus, delectus non porro vitae maiores commodi nemo! Ratione quas, repellendus amet sequi illum totam temporibus cum, pariatur modi perspiciatis ad ex magnam rem libero similique! Distinctio velit eum molestiae quaerat sapiente eligendi modi eius earum.
        template(#footer)
            p Esto es el footer

    app-modal-swipe(ref="modal2", 
    showFrom="right")
        template(#header)
            h3 Modal 2 con scroll
        template(#body)
            h1 Modal 1 con efecto 'modal-fade'
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum quam eveniet vel amet, cum repudiandae placeat laboriosam? Dignissimos velit nulla dolore mollitia quidem alias tenetur autem odit quaerat ut quae vitae dolor culpa, expedita officiis neque, harum molestiae dolores sequi tempora corrupti in consequuntur porro. Voluptatum repellendus accusantium a atque iusto ipsam numquam veniam similique rem debitis et quo ipsum, nemo nisi, esse beatae fuga! Aspernatur, repellat numquam! Culpa autem quis corporis corrupti quasi, id voluptatibus eius totam facere ex animi. Provident dolore cupiditate, amet iure, dolor placeat veniam suscipit incidunt a error tempora? Blanditiis temporibus architecto rem ratione quae hic deserunt veniam, nemo at nam alias vitae quisquam aliquid facilis ullam quasi quam quibusdam laborum ipsum provident saepe possimus! Aspernatur sit velit dolores nisi autem placeat dolore possimus amet aliquid deserunt. Deleniti placeat, repellat inventore soluta sit ex quidem, dolores optio explicabo alias ratione et enim iure ut dicta. Dignissimos ad vitae quam culpa voluptate deleniti fugiat. Unde consequatur quod laboriosam tempora dolor blanditiis molestiae beatae optio ea dolorem, quia ut iusto quo soluta! Autem culpa provident voluptatibus id! Voluptates laborum facere maxime voluptatum quos ipsam quod placeat reiciendis velit, dolorum modi possimus voluptate veritatis, odit nostrum aperiam unde ad atque minus repellat. Amet ex molestias quaerat laudantium, voluptatibus officiis, quibusdam nobis nesciunt sapiente quasi itaque quae provident mollitia velit debitis? Temporibus quos consequatur facere voluptatum incidunt vel aliquam eum eligendi commodi, explicabo laboriosam accusamus nemo nesciunt reiciendis, nulla eius id perspiciatis? Blanditiis, autem quibusdam deserunt ratione reprehenderit doloremque qui eveniet molestias dolorem voluptatibus commodi laudantium itaque id, sed ut aliquam maxime vero odit optio rem nisi. Distinctio itaque minus possimus sed deleniti id, exercitationem consequuntur atque, rem omnis nisi quas illum est adipisci, iusto fugiat aliquid perferendis asperiores nobis veritatis cupiditate minima sunt magni! Recusandae magnam corrupti dignissimos blanditiis, alias nemo beatae laudantium sit accusamus, neque placeat unde eos voluptatibus, libero nam rerum sapiente itaque. Alias eius suscipit consectetur velit eligendi, cumque minima cum magni iusto vero, vitae reiciendis impedit voluptate consequuntur possimus, fugiat fugit nisi sapiente incidunt amet obcaecati? Nisi, blanditiis aperiam, non doloribus at, nobis voluptatibus quia suscipit iure eius maxime cumque. Magni unde debitis autem, vitae dolores accusamus ad distinctio quos voluptatem nobis voluptates vel ea ipsum? Ea, repellendus. Nesciunt mollitia sint placeat commodi omnis officiis ex veritatis sed, autem, alias delectus eius, itaque maiores perspiciatis nam. Impedit quo quia molestias qui consequatur quod earum repellendus laborum iusto ratione perspiciatis architecto explicabo fugiat, dicta quibusdam incidunt voluptatibus consequuntur corporis recusandae hic maxime libero facere. Deleniti ullam nobis commodi maiores veritatis nostrum eius nisi repellat debitis ab illo voluptatum natus odit error delectus fugit facilis in exercitationem dolorum, omnis illum quidem quo at? Deserunt adipisci sit velit quos dolorem delectus voluptate, dolorum vero possimus enim quisquam ut quidem inventore. Possimus, delectus non porro vitae maiores commodi nemo! Ratione quas, repellendus amet sequi illum totam temporibus cum, pariatur modi perspiciatis ad ex magnam rem libero similique! Distinctio velit eum molestiae quaerat sapiente eligendi modi eius earum.
        template(#footer)
            p Esto es el footer

    app-modal-swipe(ref="modal3", 
    showFrom="left")
        template(#header)
            h3 Modal 2 con scroll
        template(#body)
            h1 Modal 1 con efecto 'modal-fade'
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum quam eveniet vel amet, cum repudiandae placeat laboriosam? Dignissimos velit nulla dolore mollitia quidem alias tenetur autem odit quaerat ut quae vitae dolor culpa, expedita officiis neque, harum molestiae dolores sequi tempora corrupti in consequuntur porro. Voluptatum repellendus accusantium a atque iusto ipsam numquam veniam similique rem debitis et quo ipsum, nemo nisi, esse beatae fuga! Aspernatur, repellat numquam! Culpa autem quis corporis corrupti quasi, id voluptatibus eius totam facere ex animi. Provident dolore cupiditate, amet iure, dolor placeat veniam suscipit incidunt a error tempora? Blanditiis temporibus architecto rem ratione quae hic deserunt veniam, nemo at nam alias vitae quisquam aliquid facilis ullam quasi quam quibusdam laborum ipsum provident saepe possimus! Aspernatur sit velit dolores nisi autem placeat dolore possimus amet aliquid deserunt. Deleniti placeat, repellat inventore soluta sit ex quidem, dolores optio explicabo alias ratione et enim iure ut dicta. Dignissimos ad vitae quam culpa voluptate deleniti fugiat. Unde consequatur quod laboriosam tempora dolor blanditiis molestiae beatae optio ea dolorem, quia ut iusto quo soluta! Autem culpa provident voluptatibus id! Voluptates laborum facere maxime voluptatum quos ipsam quod placeat reiciendis velit, dolorum modi possimus voluptate veritatis, odit nostrum aperiam unde ad atque minus repellat. Amet ex molestias quaerat laudantium, voluptatibus officiis, quibusdam nobis nesciunt sapiente quasi itaque quae provident mollitia velit debitis? Temporibus quos consequatur facere voluptatum incidunt vel aliquam eum eligendi commodi, explicabo laboriosam accusamus nemo nesciunt reiciendis, nulla eius id perspiciatis? Blanditiis, autem quibusdam deserunt ratione reprehenderit doloremque qui eveniet molestias dolorem voluptatibus commodi laudantium itaque id, sed ut aliquam maxime vero odit optio rem nisi. Distinctio itaque minus possimus sed deleniti id, exercitationem consequuntur atque, rem omnis nisi quas illum est adipisci, iusto fugiat aliquid perferendis asperiores nobis veritatis cupiditate minima sunt magni! Recusandae magnam corrupti dignissimos blanditiis, alias nemo beatae laudantium sit accusamus, neque placeat unde eos voluptatibus, libero nam rerum sapiente itaque. Alias eius suscipit consectetur velit eligendi, cumque minima cum magni iusto vero, vitae reiciendis impedit voluptate consequuntur possimus, fugiat fugit nisi sapiente incidunt amet obcaecati? Nisi, blanditiis aperiam, non doloribus at, nobis voluptatibus quia suscipit iure eius maxime cumque. Magni unde debitis autem, vitae dolores accusamus ad distinctio quos voluptatem nobis voluptates vel ea ipsum? Ea, repellendus. Nesciunt mollitia sint placeat commodi omnis officiis ex veritatis sed, autem, alias delectus eius, itaque maiores perspiciatis nam. Impedit quo quia molestias qui consequatur quod earum repellendus laborum iusto ratione perspiciatis architecto explicabo fugiat, dicta quibusdam incidunt voluptatibus consequuntur corporis recusandae hic maxime libero facere. Deleniti ullam nobis commodi maiores veritatis nostrum eius nisi repellat debitis ab illo voluptatum natus odit error delectus fugit facilis in exercitationem dolorum, omnis illum quidem quo at? Deserunt adipisci sit velit quos dolorem delectus voluptate, dolorum vero possimus enim quisquam ut quidem inventore. Possimus, delectus non porro vitae maiores commodi nemo! Ratione quas, repellendus amet sequi illum totam temporibus cum, pariatur modi perspiciatis ad ex magnam rem libero similique! Distinctio velit eum molestiae quaerat sapiente eligendi modi eius earum.
        template(#footer)
            p Esto es el footer


</template>

<style lang="scss">
.app-modal-swipe-demo {
    .app-button {
        margin-right: 2rem;
        margin-bottom: 2rem;
    }
}
</style>
