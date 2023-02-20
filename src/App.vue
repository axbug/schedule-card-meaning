<script>
import { onPageNotFound } from '@dcloudio/uni-app';
import { RedirectToHome } from '@/util/index.js';
onPageNotFound(() => RedirectToHome());
</script>

<style lang="scss">
@import 'vk-uview-ui/index.scss';
</style>
