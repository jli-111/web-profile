import React, { useState } from 'react';
// 演示表单：只做浏览器校验，不保存、不发送数据。
// 接入后端时应在请求成功后显示成功状态，并单独处理失败与提交中状态。
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>聊聊你的项目</h3>
      <div className="form-row">
        <label>
          你的称呼
          <input required name="name" autoComplete="name" placeholder="怎么称呼你" />
        </label>
        <label>
          公司名称
          <input
            required
            name="company"
            autoComplete="organization"
            placeholder="你的公司或团队"
          />
        </label>
      </div>
      <label>
        电子邮箱
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="name@company.com"
        />
      </label>
      <label>
        你想从哪里开始？
        <select name="service">
          <option>品牌策略与定位</option>
          <option>企业官网与数字体验</option>
          <option>内容与增长营销</option>
          <option>我想先聊一聊</option>
        </select>
      </label>
      <label>
        项目想法
        <textarea
          required
          name="message"
          rows="3"
          placeholder="简单介绍你的需求、目标或计划…"
        />
      </label>
      <button className="button dark" type="submit">
        预览咨询提交 <span>↗</span>
      </button>
      <p className="form-note" role="status">
        {submitted
          ? '✓ 表单校验通过。这是演示页面，内容未发送或保存。'
          : '演示表单：仅展示咨询流程，不发送或保存个人信息。'}
      </p>
    </form>
  );
}
