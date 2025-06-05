<template>
  <div v-if="updateTime" class="last-updated">
    <span class="label">{{ label }}</span>
    <time :datetime="localTime">{{ formattedTime }}</time>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '最后更新于'
    },
    // 可以传入时区偏移量（小时），默认是北京时区 UTC+8
    timeZoneOffset: {
      type: Number,
      default: 8
    }
  },
  
  computed: {
    updateTime() {
      return this.$page.lastUpdated;
    },
    
    // 计算本地时间（解决时区问题）
    localTime() {
      if (!this.updateTime) return null;
      
      // 创建日期对象并应用时区偏移
      const date = new Date(this.updateTime);
      return new Date(date.getTime() + this.timeZoneOffset * 60 * 60 * 1000);
    },
    
    // 格式化为本地时间
    formattedTime() {
      if (!this.localTime) return '';
      
      const y = this.localTime.getFullYear();
      const m = (this.localTime.getMonth() + 1).toString().padStart(2, '0');
      const d = this.localTime.getDate().toString().padStart(2, '0');
      const h = this.localTime.getHours().toString().padStart(2, '0');
      const min = this.localTime.getMinutes().toString().padStart(2, '0');
      
      return `${y}/${m}/${d} ${h}:${min}`;
    }
  }
};
</script>