<template>
    <div :class="$style.codeHelper">
        <div>
            <div :class="$style.title">
                Symbol应用
            </div>
            <p :class="$style.step">第一步：拷贝项目下面生成的symbol代码：</p>
            <code class="mb-20" :class="$style.code">https://mallcdn.youpenglai.com/pl-icons/4de90020-26f5-11ea-ab30-8fed2aba56d5.js</code>
            <p :class="$style.step">第二步：挑选相应图标并获取类名，应用于页面：</p>
            <pre >
                <code :class="$style.code">
                    <span :class="$style.tag">&lt;pl-svg</span>
                    <span :class="$style.attr">name=<i :class="$style.attrValue">"icon-right"</i></span>
                    <span :class="$style.attr">width=<i :class="$style.attrValue">"35"</i></span>
                    <span :class="$style.attr">height=<i :class="$style.attrValue">"35"</i></span>
                    <span :class="$style.attr">fill=<i :class="$style.attrValue">"#fff"</i></span>
                    <span :class="$style.tag">/&gt;</span>
                </code>
            </pre>
        </div>

        <div>
            <div :class="$style.title">
                Font Class应用
            </div>
            <p :class="$style.step">第一步：拷贝项目下面生成的css代码：</p>
            <code class="mb-20" :class="$style.code">https://mallcdn.youpenglai.com/pl-icons/4e601d10-23fa-11eb-9bbf-bf92414fe79a/yaji.css</code>
            <p :class="$style.step">第二步：挑选相应图标并获取类名，应用于页面：</p>
            <pre>
                <code :class="$style.code">
                    <span :class="$style.tag">&lt;i</span> <span :class="$style.attr">class=<i :class="$style.attrValue">"yaji-icon icon-to-right"</i></span><span :class="$style.tag">/&gt;</span>
                </code>
            </pre>
        </div>

        <div>
            <div :class="$style.title">
                unicode应用
            </div>
            <p :class="$style.step">第一步：将图标下载至本地</p>
            <p :class="$style.step">第二步：按照下面的代码就行修改</p>
            <pre>
                <code :class="$style.code">
                    <span :class="$style.tag">&lt;style</span><span :class="$style.tag">&gt;</span>
                    @font-face {
                        font-family: 'yaji-icon';
                        src: url('yaji.eot');
                        src: url('yaji.eot?#iefix') format('embedded-opentype'),
                        url('yaji.woff') format('woff'),
                        url('yaji.ttf') format('truetype'),
                        url('yaji.svg#iconfont') format('svg');
                    }
                    .yaji-icon {
                        font-family: 'yaji-icon' !important;
                    }
                    <span :class="$style.tag">&lt;/style</span><span :class="$style.tag">&gt;</span>
                    <span :class="$style.tag">&lt;i</span> <span :class="$style.attr">class=<i :class="$style.attrValue">"yaji-icon"</i></span><span :class="$style.tag">&gt;&amp;#xf25e;&lt;/i&gt;</span>
                </code>
            </pre>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CodeHelper'
}
</script>

<style module lang="scss">
  .codeHelper {}
  .title {
    margin-top: 34px;
    margin-bottom: 14px;
    padding-bottom: 14px;
    font-size: 22px;
    border-bottom: 1px solid #e7e7e7;
  }
  .step {
    margin-bottom: 14px;
    font-size: 16px;
  }
  .code {
    display: block;
    padding: 10px 8px;
    font-size: 16px;
    font-family: Consolas;
    background-color: #111111;
    border-radius: 4px;
    color: #f9c568;
    > span {
      font-family: Consolas;
    }
    .tag {
      color: #de6a6f;
    }
    .attr {
      color: #f9c568;
    }
    .attrValue {
      color: #6eaba5;
      font-family: Consolas;
    }
  }
</style>
