<template>
  <form
    class="box content my-data fade-in"
    enctype="multipart/form-data"
    @submit.prevent=""
  >
    
    
    <div class="form-row">
      <CustomFile class="custom-file--photo" placeholder="">Фото</CustomFile>
      <CustomInput class="form-row__item">Имя</CustomInput>
      <CustomInput class="form-row__item">Фамилия</CustomInput>
    </div>
    
    
    <div class="form-row">
      <CustomInput class="form-row__item">Дата рождения</CustomInput>
      <CustomSelect class="form-row__item"
        @selectChange="selectChanged"
        :data="selectContent"
        placeholder="Выберать"
        search=""
        multyselect=""
      >Гражданство</CustomSelect>
      <CustomSwitch :data="switchData">Пол</CustomSwitch>
    </div>
    
    
    <div class="form-row">
      <CustomInput class="form-row__item">Заграничный паспорт</CustomInput>
      <CustomInput class="form-row__item">Действителен до</CustomInput>
      <CustomFile class="form-row__item">Фото документа (не обязательно)</CustomFile>
    </div>
    
    
    <div>
      <AppButton class="btn btn--submit right" type="'submit'">Отправить</AppButton>
    </div>
    <div class="my-data__add-tourist">Добавить попутчика</div>
  </form>
</template>

<script>
  export default {
    name: "MyData",
    data: ()=>({
      selectContent: ['usa', 'gb', 'ru', 'ua', 'fr', 'de', 'cz'],
      switchData: ['М', 'Ж']
    }),
    methods: {
      selectChanged(){
        console.log("selectChanged CabinetMyData")
      }
    },
  }
</script>

<style scoped></style>
