<template>
  <div class="page page-cabinet fade-in">
    <div class="container page-container cabinet">

      <c-sidebar
        :sidebarData="cabinetSidebarData"
        @sidebarTab="sidebarCurrentComponent=$event"
      ></c-sidebar>
      <nuxt name="cabinet"></nuxt>
    </div>
  </div>
</template>
<script>
  export default {
    name: "cabinet",
    data: () => ({
      cabinetSidebarData: [
        {
          title: 'Мои данные',
          imgPath: 'person--black',
          linkTo: 'cabinetMyData'
        }, {
          title: 'Список заказов',
          imgPath: 'order-list',
          linkTo: 'order-list'
        }, {
          title: 'Choother Бонусы',
          imgPath: 'bonuses',
          linkTo: 'cabinetBonuses'
        }, {
          title: 'Информация',
          imgPath: 'info',
          linkTo: 'cabinetInfo'
        },
      ],
    }),
    computed: {},
  }
</script>
<style lang="scss">
  @import '../../assets/scss/vars';
  .my-data{
    .custom-file--photo{
      margin-right: 24.6rem;
      flex-grow: 0;
      width: 4.6rem;
    }
    .form-row{
      &:nth-child(3){
        margin-bottom: 10.8rem;
      }
      &__item{
        margin-right: 6.4rem;
        &:last-child{
          margin-right: 0;
        }
      }
    }
    &__add-tourist{
      color: $cod-gray;
      cursor: pointer;
      font-size: 18px;
      line-height: 1;
      margin-top: 2.5rem;
      user-select: none;
      &:after{
        margin-left: 1.6rem;
        content: '+';
        display: inline-block;
        color: $cobalt;
        font-size: 18px;
        line-height: 1;
        font-weight: 600;
      }
    }
  }
  .order-list{
    .bottom{
      margin-top: 10rem;
      display: flex;
      justify-content: flex-end;
      .btn--submit{
        margin-right: 3rem;
      }
    }
  }
  .order-item{
    flex-grow: 1;
    &__body{
      padding-top: 3.5rem;
    }
    .info{
      &__row{
        display: flex;
        margin-bottom: 15px;
        &:last-child{
          margin-bottom: 0;
        }
        &--inline{
          display: inline-flex;
        }
      }
      &__title{
        font-size: 16px;
        line-height: 1;
        color: $gray;
        margin-right: 15px;
      }
      &__data{
        font-size: 13px;
        color: $mine-shaft;
      }
      &__descr-small{
        font-size: 11px;
        line-height: 1;
        color: $gray;
      }
      &__file{
        display: flex;
        justify-content: space-between;
      }
      &-double{
        display: flex;
        align-items: center;
        margin-bottom: 5rem;
        &__data{
          font-size: 13px;
          line-height: 1;
          color: $mine-shaft;
          margin-left: 15px;
          margin-right: 15px;
        }
        &__flight-info{
          margin-left: 15rem;
        }
        &__title{
          width: 80px;
        }
        &__time-block{
          margin-top: 10px;
          margin-left: 15px;
          margin-right: 15px;
          text-align: center;
          &--one{
            margin-top: -5px;
          }
          .info__data{
            margin-bottom: 8px;
          }
        }
        &:last-child{
          margin-bottom: 0;
        }
        &__in-air-time{
          text-align: center;
        }
        .info__border-line{
          text-align: center;
          &:after{
            content: '';
            margin-top: 16px;
            display: block;
            height: 1px;
            width: 164px;
            background-color: $silver;
            margin-bottom: 16px;
          }
        }
      }
      &-line{
        display: flex;
        margin-bottom: 3.5rem;
        &__item{
          margin-right: 35px;
          &:last-child{
            margin-right: 0;
          }
        }
      }
    }
    &-documents{
      &__list{
        display: flex;
        flex-direction: column;
      }
      &-item{
        display: flex;
        align-items: center;
        padding: 2.4rem 0 1.6rem;
        border-bottom: 1px solid $alto-2;
        &:last-child{
          border-bottom: 0;
        }
        &__image{
          width: 20px;
          height: 30px;
          background-image: url("../../static/icons/document.svg");
          background-repeat: no-repeat;
          background-position: center center;
          margin-right: 3rem;
        }
        &__type{
          color: $gray;
          font-size: 16px;
        }
        &__status{
          color: $emperor;
          margin-left: auto;
        }
      }
    }
    .orders-custom-table{
      margin-bottom: 80px;
    }
  }
  // Кастомизация таблицы заказов
  .orders{
    &-custom-table{
      tbody{
        tr{
          transition: all .3s;
          &:hover{
            background-color: rgba($anakiwa, .5);
            td:first-child{
              text-decoration: underline;
            }
          }
        }
      }
      .currency{
        font-size: 10px;
        line-height: 1;
        color: $cobalt;
        font-weight: 600;
        margin-left: 3px;
      }
    }
  }
  .tourists-data{
    display: flex;
    flex-wrap: wrap;
    .tourist{
      width: 50%;
      flex-basis: 50%;
      margin-bottom: 6rem;
      &:nth-last-child(-n+2){
        margin-bottom: 0;
      }
    }
  }
  .payment-bills{
    &__head{
      font-size: 18px;
      color: $mine-shaft;
      padding-bottom: 1.5rem;
      .payment-bills__item-left{
        font-size: 18px;
        color: $mine-shaft;
        font-weight: 500;
      }
      .payment-bills__item-price{
        font-weight: 600;
        font-size: 18px;
        color: $mine-shaft-3;
      }
    }
    &__item{
      padding-top: 16px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid $alto-2;
      padding-bottom: 16px;
      &-currency{
        color: $cobalt;
        text-transform: uppercase;
      }
      &-left{
        font-size: 13px;
      }
      &-right{
        text-align: right;
        .btn{
          margin-top: 2rem;
          margin-left: auto;
        }
      }
      &-description{
        margin-top: 1.4rem;
        font-size: 13px;
        color: $gray;
      }
      &-price{
        font-size: 14px;
        font-weight: 500;
        color: $cod-gray;
      }
    }
  }
  //###################################################
  .bonuses{
    &__list{
      display: flex;
      flex-direction: column;
    }
    &__row{
      margin-top: 3rem;
      display: flex;
      justify-content: flex-end;
    }
    &-item{
      display: flex;
      justify-content: space-between;
      padding-bottom: 3rem;
      border-bottom: 1px solid $alto-2;
      margin-bottom: 3rem;
      &__info{
      }
      &__title{
        font-size: 18px;
        color: #000;
        margin-bottom: 2.4rem;
      }
      &__reference{
        font-size: 13px;
        color: $gray;
      }
      &__value{
        display: flex;
        font-size: 14px;
        font-weight: 500;
      }
      &__money{
        color: #000;
      }
      &__currency{
        margin-left: 4px;
      }
    }
  }
  .information{
    &__text{
      max-height: 600px;
      overflow-y: auto;
    }
  }
</style>
