# Deployment Runbook

适用于仓库：`marktonton/tonton-b2b-fightwear-website`

## 固定发布顺序

1. 只在固定工作区操作：
   `C:\Users\Administrator\AccioWork\2026-08-27-10-23-41-862-bb225bcc\tonton-b2b-fightwear-website-working`
2. 发布前先读取本地分支、HEAD、上游分支 SHA 和远程分支 SHA：
   - `git status --short --branch`
   - `git rev-parse HEAD`
   - `git rev-parse @{u}`
   - `git rev-list --left-right --count @{u}...HEAD`
   - `git ls-remote --heads origin <branch>`
3. 确认工作树和 diff 文件清单，仅提交本次必要文件；先运行项目验证命令和 `git diff --check`。
4. **优先使用已登录的 GitHub Desktop 执行普通 Push**。GitHub Desktop 顶部的 `Push origin 1` 只表示本地有 1 个待推送提交，不能当作已推送证据；必须用远程 SHA 或 GitHub 读取结果核对。
5. Push 成功后再创建或更新 PR，核对 PR head SHA、changed_files、mergeability 和 CI；确认无误后使用 head SHA guard 合并到 `main`。
6. 合并后按 Vercel 工具链读取部署列表和部署详情，确认：环境为 `production`、状态为 `READY`、部署 commit 等于 `main` merge commit，并核对正式域名。Preview `READY` 不等于 Production 已更新。

## 本次故障分层与成功路径

### 失败阶段

- 本地视觉优化 commit 已生成：`2336317d48281c451123dd8d7698553f6fde4e10`。
- HTTPS Push 错误：`Recv failure: Connection was reset`。
- 后续 HTTPS 查询错误：`Failed to connect to github.com port 443` / `Couldn't connect to server`。
- SSH 初始错误：`Host key verification failed`。
- 核对 GitHub 官方 host key 并写入用户 known_hosts 后，SSH 进一步报：`Permission denied (publickey)`。

这些错误分别表示：HTTPS 到 GitHub 的网络传输阻断；SSH 主机身份未在 known_hosts 中确认；SSH 主机已确认但本机没有可用的已授权 GitHub 用户公钥。GitHub connector 能读仓库/PR，不代表本机 Git push 凭据可用。

### 成功阶段

1. 用户在 GitHub Desktop 恢复普通 Push，commit `2336317` 成功到达远程和 Vercel。
2. Vercel 自动生成该 commit 的 READY Preview：`dpl_AYcUmRZBPbwdH72wkVCZxAoHR8Dm`。
3. 创建 PR #7：`style: widen why brands section`。
4. PR #7 仅包含 `app/globals.css`（17 additions / 8 deletions），head 为 `2336317d48281c451123dd8d7698553f6fde4e10`，确认可合并后安全合并。
5. 合并 commit：`9287657fae2c59ea76263bc34495b06e688ee4e4`。
6. Vercel Production deployment：`dpl_GUh4hYLPXvuKp8MeqjFceB8JXUS4`，状态 `READY`，对应上述 merge commit，正式域名包含 `www.tontongear.com` 和 `tontongear.com`。

## 后续排障规则

- 不要盲目重复同一失败通道；先区分网络、host key 和用户密钥认证层，再选择不同的安全路径。
- 不要 force push，不要删除分支或部署，不要改写历史。
- 不要索取、保存或输出密码、Token、SSH 私钥或其他敏感凭据。
- 任何“已推送”“已合并”“已上线”结论都必须有本轮远程 SHA、PR merged 回执或 Vercel Production `READY` 详情作为证据。
- 如果工作区路径报“系统找不到指定的路径”，立即停止，不切换到其他副本、不删除文件；先恢复固定工作区访问。

## 长期首页展示约束

- `WHY BRANDS CHOOSE TONTON` 区块后必须紧接 `TOP PICKS`。
- 首页 TOP PICKS 严格展示 8 个现有产品，其余产品不在首页渲染；产品名称、ID、图片和链接必须来自 `data/products.json`。
- 参考外部站点时只借鉴信息架构，不复制其文案、图片或其他资产。
- 保持审美统一：标题层级清晰、卡片比例/按钮/间距统一，桌面 4×2、平板 2 列、手机单列或合理双列，任何尺寸不横向溢出。
