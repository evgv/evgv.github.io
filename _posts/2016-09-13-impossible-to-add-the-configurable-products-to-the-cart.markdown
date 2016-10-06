---
layout: post
title:  "Magento. Impossible to add the configurable products to the cart."
date:   2016-09-13
categories: [magento, configurable, cart]
---

I have a big issue with configurable products. Impossible to add them to the cart. I always get `"Please specify the product's option(s)."`.
There is no error in `system.log` or `exception.log`.

After some debug and googling I found that this issue appeared after after I applied `shopping cart rules with a category condition`. So I removed the shopping cart rules that had a category condition and then it work perfectly. I was able to add any configurable product to the cart again. But I need the shopping rules I used. Adding a new one didn't work: if the shopping cart rule had a category condition, impossible to add configurable product to the cart. Without a category condition, no issues.

Fixed this issue by copying and changing the core file `../app/code/core/Mage/SalesRule/Model/Rule/Condition/Product/Subselect.php` to ../app/code/local/Mage/SalesRule/Model/Rule/Condition/Product/Subselect.php.

{% highlight php %}
	if (Mage_Rule_Model_Condition_Combine::validate($item)) {
{% endhighlight %}

instead

{% highlight php %}
	if (parent::validate($item)) {
{% endhighlight %}

117str, method `validate()`


Full method code
{% highlight php %}
    /**
     * Rewrited!
     * 
     * validate
     *
     * @param Varien_Object $object Quote
     * @return boolean
     */
    public function validate(Varien_Object $object)
    {
        if (!$this->getConditions()) {
            return false;
        }

//        $value = $this->getValue();
//        $aggregatorArr = explode('/', $this->getAggregator());
//        $this->setValue((int)$aggregatorArr[0])->setAggregator($aggregatorArr[1]);

        $attr = $this->getAttribute();
        $total = 0;
        foreach ($object->getQuote()->getAllVisibleItems() as $item) {
            if (Mage_Rule_Model_Condition_Combine::validate($item)) { // instead if (parent::validate($item)) {
                $total += $item->getData($attr);
            }
        }
//        $this->setAggregator(join('/', $aggregatorArr))->setValue($value);

        return $this->validateAttribute($total);
    }
{% endhighlight %}
