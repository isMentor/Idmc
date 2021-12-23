###
 # @Author: tiw
 # @LastEditors: Please set LastEditors
 # @Description:  自动化部署脚本
### 

# 执行过程不为 true 自动退出
set -e
echo "Enter release version: "
read VERSION
read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo  # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # commit
  git add -A
  git commit -m "[dist] $VERSION"
  yarn run version $VERSION --message "[release] $VERSION"
  git push origin master

  # publish
  yarn run publish
fi