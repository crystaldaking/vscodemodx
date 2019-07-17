<?
/* первое, постройте запрос */
$c = $modx->newQuery('modResource');
/* нам нужны только опубликованные и неудалённые ресурсы */
$c->where(array(
  'published' => true,
  'deleted' => false,
));

/* взять все наследники ресурса с ID 390 */
$children = $modx->getChildIds(390);
if (count($children) > 0) {
    $c->where(array(
        'id:IN' => $children,
    ));
}
/* отсортировать новые сверху */
$c->sortby('menuindex','ASC');
/* взять ресурсы как xPDOObjects */
$resources = $modx->getCollection('modResource',$c);
 
$output = '';
foreach ($resources as $resource) {
   $output .= '
'.$resource->get('pagetitle').'
';
}
return $output;