<script>
export default {
  data() {
    return {
      dataList: [...Array(100).keys()],
    };
  },
  mounted() {
    setTimeout(() => {
      this.dataList = [...Array(200).keys()].slice(100, 200);
      this.$nextTick(() => {
        this.$exposure.exposureCheck();
      });
    }, 5000);
  },
  methods: {
    handleClickBtn() {
      this.$exposure.exposureCheck();
    },
  },
  render() {
    const { dataList } = this;
    return (
      <div>
        <button class="exposure-btn" onClick={this.handleClickBtn}>
          exposure
        </button>
        <div class="data-list">
          {dataList.map((data, index) => (
            <li class="data-item" v-exposure={{ data: `data: ${data}` }}>
              {data}
            </li>
          ))}
        </div>
      </div>
    );
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

.data-item {
  width: auto;
  height: auto;
  min-height: 200px;
  min-width: 300px;
  display: block;
  border: 1px solid black;
  font-size: 30px;
  font-weight: bolder;
}

.exposure-btn {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
