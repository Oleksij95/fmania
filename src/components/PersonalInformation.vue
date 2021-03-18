<template>
    <div class="personal_info_wrapper">
        <h2>Personal Informaton</h2>
        
        <div class="flex_wrapper jccb">
            <div class="block_item">
                <label for="first_name">First name</label>
                <input type="text" name="first_name" id="first_name">
            </div>
            <div class="block_item">
                <label for="last_name">Last name</label>
                <input type="text" name="last_name" id="last_name">
            </div>
        </div>

        <div class="gender_wrapper">
            <p class="block_title">Gender</p>
            <div class="flex_wrapper">
                <div class="block_item block_item_gender">
                    <input type="radio" name="gender" id="gender_male">
                    <label for="gender_male">Male</label>
                </div>

                <div class="block_item block_item_gender">
                    <input type="radio" name="gender" id="gender_female">
                    <label for="gender_female">Female</label>
                </div>
            </div>
        </div>

        <div class="flex_wrapper jccb">
            <div class="block_item">
                <label for="email">Email</label>
                <input type="text" name="email" id="email">
            </div>
            <div class="block_item">
                <label for="phone">Phone</label>
                <input type="text" name="phone" id="phone">
            </div>
        </div>

        <button class="edit black_btn">Edit</button>



    </div>
</template>

<script>

export default {
    
}
</script>

<style lang="scss" scoped>

    .personal_info_wrapper{
        .black_btn{
            border: none;
            width: 86px;
            height: 37px;
            border-radius: 0;
            margin-top: 29px;
            text-transform: uppercase;
            font-weight: 400;
        }
        h2{
            margin-bottom: 18px;
            font-weight: 500;
            font-size: 22px;
            line-height: 26px;
            color: #211F1F;
        }
        p.block_title{
            margin-bottom: 0;
        }
        .flex_wrapper{
            display: flex;
            &.jccb{
                justify-content: space-between;
                .block_item{
                    width: 49%;
                }
            }
        }
        .block_item{
            display: flex;
            flex-direction: column;
            label{
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                color: #474540;
                margin-bottom: 13px;
            }
            input{
                background: #F5F5F5;
                border: 1px solid #DEDEDE;
                box-sizing: border-box;
                border-radius: 2px;
                height: 38px;
                padding: 0 15px;
            }
        }

        .gender_wrapper{
            margin-top: 27px;
            margin-bottom: 17px;
            .block_item_gender{
                margin-right: 35px;
            }
        }

        .block_item_gender{
            display: flex;
            flex-direction: row;
            align-items: center;
            label{
                margin: 0 0 0 10px;
                position: relative;
                padding-left: 5px;
                cursor: pointer;
                &::before{
                    content: "";
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    position: absolute;
                    top: -2px;
                    left: -23px;
                    border: 1px solid #C4C4C4;
                }
                &::after{
                    content: "";
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    position: absolute;
                    top: 4px;
                    left: -17px;
                    background: #506BFA;
                    opacity: 0;
                }
            }
            input:checked + label:after{
                opacity: 1;
            }
            input:checked + label::before{
                border: 1px solid #506BFA;
            }
            input{
                opacity: 0;
            }
        }
    }
</style>