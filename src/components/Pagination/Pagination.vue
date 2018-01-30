<template>
    <div class="Pagination">
        <el-pagination background layout="prev, pager, next, jumper" :current-page="paginationData.activePage" @current-change="change" :page-size="paginationData.pageSize" :total="paginationData.totalNum"></el-pagination>
    </div>
</template>
<script>
    export default {
        props:[
            'paginationData'
        ],
        data () {
            return {
                
            }
        },
        watch: {
            paginationData(){
                console.log(1111);
            }
        },
        methods: {
            change(val){
                this.$emit("pageChange",val);
            }
        }
    }
</script>
<style scoped>
    .Pagination{
        text-align: right;
    }
</style>