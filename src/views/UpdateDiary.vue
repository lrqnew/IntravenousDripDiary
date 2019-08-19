<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '100%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">修改日记</p>
         <a slot="extra" @click.prevent="peve">
          <Icon type="md-arrow-round-back" />
          返回
        </a>
        <div class="edit_container">
             <quill-editor 
            v-model="diary.dContent" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
        </div>
      </Card>
      <Collapse value="1"  simple>
        <Panel name="1">
          日记选项
           <p slot="content">
           <Form  inline :label-width="90">
        <FormItem label="日记标题" >
            <Input prefix="ios-paper" type="text"  :placeholder="diary.dTitle" clearable v-model="diary.dTitle">
            </Input>
        </FormItem>
        <FormItem label="隐私设置">
            <RadioGroup v-model="formItem.radio">
                <Radio label="open" true-value="1" false-value="0" v-model="diary.privacy" >公开</Radio>
                <Radio label="private" true-value="0" false-value="1"  v-model="diary.privacy">私密</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="日记标签">
           <Input prefix="md-pricetag"  type="text"  placeholder="日记标签"  clearable v-model="tag" @keyup.enter.native="tags(tag)">
            </Input>
        </FormItem>
         <FormItem>
            <Button type="primary" @click="updateDiary">修改日记</Button>
        </FormItem>
         <FormItem >
           <Tag type="border"   closable  class="tagg"  :color="tagsColor[index]" v-for="(item,index) of diary.dTag" :key="index" @on-close="handleClose" :name="item" >{{item}}</Tag>
        </FormItem>
    </Form>
          </p>
        </Panel>
      </Collapse>
    </Content>
  </Layout>
</template>
<script>
import { addQuillTitle } from "../assets/js/quill-title";
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
// 工具栏配置
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["link", "image", "video"],
  ["clean"] // remove formatting button
];
export default {
  components: {
    quillEditor
  },

  data() {
    return {
      userId: JSON.parse(localStorage.getItem("userInfo")).userId,
      editorOption: {
        placeholder: "请输入编辑内容",
        theme: "snow", //主题风格
        modules: {
          toolbar: {
            container: toolbarOptions, // 工具栏
            handlers: {
              image: function(value) {
                if (value) {
                  document.querySelector("#quill-upload input").click();
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          }
        }
      }, // 富文本编辑器配置
      diary: {
        dContent: "", //富文本内容
        dTitle: new Date().toLocaleDateString() + "日记", //日记标题
        dTag:[], //日记标签
        privacy: "0",
        userId: JSON.parse(localStorage.getItem("userInfo")).userId,
        dId:''
      },
      tag: "",
      tagsColor: [
        "primary",
        "success",
        "error",
        "warning",
        "magenta",
        "red",
        "volcano",
        "orange",
        "gold",
        "yellow",
        "lime",
        "green",
        "cyan",
        "blue",
        "geekblue",
        "purple",
        "#FFA2D3"
      ],
      formItem: {
        radio: "private" //是否公开
      },
    };
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    //修改日记
    updateDiary() {
      if (this.diary.dContent.trim()) {
        this.request
          .httpPut(this.requestUrl.updateDiary, this.diary)
          .then(res => {
            if (res.code === 200) {
              this.$Message.success("日记修改成功");
            } else {
              this.$Message.error("日记修改失败");
            }
          });
      } else {
        this.$Message.error("日记内容不能为空");
      }
    },
    tags(value) {
      this.tag = "";
      if (this.diary.dTag.length < 18 && value != "") {
        this.diary.dTag.push(value);
      } else {
        this.$Message.warning("日记标签不能为空和多余18个");
      }
    },
    //标签关闭
    handleClose(event, name) {
      const index = this.diary.dTag.indexOf(name);
      this.diary.dTag.splice(index, 1);
    //   if(this.diary.dTag.length==0){
    //        this.diary.dTag.push(null);
    //   }
    },
     //返回上一页
    peve() {
      this.$router.go(-1);
    },
     //根据id查询用户日记内容
    diaryDetails() {
      var did = this.$route.params.id;
      this.diary.dId=did;
      this.request
        .httpGet(this.requestUrl.diaryDetails, {
          dId: did,
          userId: this.userId
        })
        .then(res => {
          this.diary.dTitle = res[0].dTitle;
          this.diary.dContent = res[0].dContent;
          this.diary.dTag = res[0].dTag.split(",");
        });
    },
  },
  mounted() {
    addQuillTitle();
    this.diaryDetails();
  }
};
</script>
<style>
/* .write {
  height: auto;
} */
.ql-container {
  height: 400px !important;
}
</style>



