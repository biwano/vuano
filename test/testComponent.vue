<template>
  <div>
  	<b>Boolean Radio</b>
     <boolean-radio v-model="booleanAttribute"></boolean-radio>
    &nbsp;/ Value : {{booleanAttribute}}
    <hr/>

    <h3>Breadcrumb</h3>
    <breadcrumbs :items="breadcrumbs"></breadcrumbs>
    <hr/>

    <h3>Icon</h3>
    <icon icon="heart"></icon>
    <hr/>

    <b>Messages</b>
   <messages :messages="$store.state.message.messages"></messages> 

</div>
</template>

<script>
import Vuano from '../src/index';

export default {
  mixins: [Vuano.Mixins.MessagesMixin],
  data() {
    return {
      booleanAttribute: undefined,
      breadcrumbs: [{ active: false, description: 'it', name: 'It' },
        { active: false, description: 'is', name: 'Is' },
        { active: false, description: 'a', name: 'A' },
        { active: false, description: 'route', name: 'Route' },
      ],
    };
  },
  created() {
    this.displayInfo('This is a message');
  },
  methods: {
  },
  components: {
    'boolean-radio': Vuano.Components.BooleanRadio,
    'breadcrumbs': Vuano.Components.Breadcrumbs,
    'icon': Vuano.Components.Icon,
    'messages': Vuano.Components.Messages,
  },
};
</script>



