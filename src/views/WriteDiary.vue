<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px', width: '80%' }">
      <Card :bordered="false" class="write" dis-hover>
        <p slot="title">记录日记</p>
        <div class="edit_container">
             <quill-editor 
            v-model="content" 
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
            <Input prefix="ios-paper" type="text"  placeholder="日记标题" clearable>
            </Input>
        </FormItem>
        <FormItem label="隐私设置">
            <RadioGroup v-model="formItem.radio">
                <Radio label="open">公开</Radio>
                <Radio label="private">私密</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="日记标签">
           <Input prefix="md-pricetag"  type="text"  placeholder="日记标签"  clearable style="width: 600px">
            </Input>
        </FormItem>
         <FormItem>
            <Button type="primary" >发布日记</Button>
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
      content: "", //富文本内容
      formItem: {
        radio: "private"
      }
    };
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {} // 内容改变事件
  },
  mounted() {
    addQuillTitle();
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



